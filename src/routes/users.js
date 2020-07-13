const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const registerMiddleware = require('../middlewares/registerMiddleware');
//const authMiddleware = require('../middlewares/authMiddleware');

const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');

 
router.get('/login/', userController.register);
router.post('/login/', registerValidation, registerMiddleware, userController.save);



//router.get('/login', userController.login);
//router.post('/login', loginValidation, userController.verify);


  
module.exports = router;