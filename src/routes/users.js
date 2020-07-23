const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const registerMiddleware = require('../middlewares/registerMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const authEditionMiddleware = require('../middlewares/authEditionMiddleware');

const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');

 
router.get('/register/', userController.register);
router.post('/register/', registerValidation, registerMiddleware, userController.save);


router.get('/login', userController.login);
router.post('/login', loginValidation, userController.verify);

router.get('/', authMiddleware ,userController.welcome);

router.get('/logout', authMiddleware, userController.logout);

router.get('/edit-login', userController.editLogin);
router.post('/edit-login', userController.verifyedit);

router.get ('/edit', userController.accessEditUser);
router.post ('/edit', userController.editUser)

router.get ('/editsuccess', userController.editsuccess);

module.exports = router;