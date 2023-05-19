const UserModel = require ('../models/user.model');
const jwt = require('jsonwebtoken');
const { signUpErrors } = require('../utils/errors.utils');
const { signInErrors } = require('../utils/errors.utils');
const maxAge = 3*24*60*60*1000;
const bcrypt = require('bcryptjs');
const secretKey = 'SECRET';


///////////////////////SIGN UP//////////////////////////////////////
module.exports.signUp = async (req, res) => {
    console.log(req.body);
    const{pseudo, email, password} = req.body
   /* const decryptpassword = decryptData(password, secretKey);*/

 

    try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        
        const user = await UserModel.create({ pseudo: pseudo, email: email, password: hashedPassword });
        res.status(201).json({ user: user._id});
    }
catch(err){ 
    const errors = signUpErrors(err);
    res.status(200).send({errors})}
};
///////////////////SIGN IN///////////////////////////////////////////////////


module.exports.logout = async(req,res) => {
try {
console.log(req.user);
console.log(req.user.authTokens);
req.user.authTokens = req.user.authTokens.filter((token) => {
    return token.token !== req.token;} );
    await req.user.save();
    res.status(200).json({message: 'Logged out!'});
} 
catch(err) {
    res.status(500).send;
    console.log(err);
    

}
};

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
   /*const decryptpassword = decryptData(password, secretKey);*/

    if (!email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory");
    }
  
    const user = await UserModel.findOne({ email });
    console.log(user);
    if (!user) {
      res.status(401).send("Incorrect email");
      return; // Sortir de la fonction après l'envoi de la réponse
    }
    const passwordMatch = bcrypt.compareSync(password, user.password);
    console.log(passwordMatch);
    console.log(password, user.password);
    if (!passwordMatch) {
      res.status(401).send("Incorrect password");
      return;
    }
  
    const accessToken = jwt.sign(
      {
        user: {
          pseudo: user.pseudo,
          email: user.email,
          _id: user._id,
        },
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "200m" }
    );
    console.log(accessToken);
  
    if (!user.authTokens) {
      user.authTokens = [];
    }
    user.authTokens.push({ token: accessToken });
    await user.save();
  
    res.status(200).json({ accessToken });
  };
/*
module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.login(email, password);
        const accessToken = jwt.sign({
            user:{
                pseudo: user.pseudo,
                email: user.email,
                _id: user._id,
            }
        }, process.env.TOKEN_SECRET,
            { expiresIn: "200m" }
        );
        console.log(accessToken);

        // Ajouter le nouveau token à l'attribut authTokens de l'utilisateur
        if (!user.authTokens) { // Initialiser le tableau authTokens si besoin
            user.authTokens = [];
        }
        user.authTokens.push({ token: accessToken }); // Ajouter un objet avec la propriété "token"

        // Enregistrer les modifications dans la base de données
        await user.save();

        res.status(200).json({ accessToken });
   

    } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
    }
}*/
