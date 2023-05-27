const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");



module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.send(200).json('no token')
      } else {
        console.log(decodedToken.id);
        next();
      }
    });
  } else {
    console.log('No token');
  }
};

module.exports.verifyToken = async(req, res, next) => {
try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(decodedToken,decodedToken.user._id);

    const userId = decodedToken.user._id;
    /*req.user = userId;
    console.log(userId, req.body.userId,token,decodedToken,req.user)
    req.token = token;

    if (req.body.userId && req.body.userId !== userId) {
        throw 'Invalid user ID';
    } else {
        next();
    }*/
    console.log(userId, token);
    const user = await UserModel.findOne({_id: userId/*, 'authTokens.token': token*/});
    console.log(user);
    if (!user) {
        throw new Error();
    }
    req.user = user;
    req.token = token;
    console.log(req.user, req.token);
    next();
} catch(e) {
    res.status(401).json({
       'Invalid request!' : e
    });
    console.log(e);
}

}

module.exports.verifyTokenAdmin = async(req, res, next) => {
  try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
      console.log(decodedToken,decodedToken.user._id);
  
      const userId = decodedToken.user._id;


      if (userId!="6467a3d6adbf2d004b01bf37") {
          throw new Error();
      }
      req.user = user;
      req.token = token;
      console.log(req.user, req.token);
      next();
  } catch(e) {
      res.status(401).json({
         'Invalid request!' : e
      });
      console.log(e);
  }
  
  }
