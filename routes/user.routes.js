const router = require('express').Router();
const authControllers = require ('../controllers/auth.controllers');
const userControllers =  require ('../controllers/user.controllers');
const uploadControllers = require('../controllers/upload.controllers');
const authMiddleware = require('../middleware/auth.middleware');
const multer = require('multer');
const upload = multer();
//authentification

router.post("/signup", authControllers.signUp);
router.post('/login', authControllers.login);
router.post('/logout',authMiddleware.verifyToken, authControllers.logout);

//user database
router.get('/',authMiddleware.verifyToken,userControllers.getAllUsers);


router.put('/:id',userControllers.updateUser);

router.delete('/:id', userControllers.deleteUser);

router.get('/idme',authMiddleware.verifyToken, async(req,res) => {
    res.status(200).json(req.user._id);
});




//postupload//
router.post('/upload' ,upload.single('file'), uploadControllers.uploadProfil);



module.exports = router;

