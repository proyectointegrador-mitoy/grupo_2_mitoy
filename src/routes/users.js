const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const registerMiddleware = require('../middlewares/registerMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');

router.get('/welcome/', authMiddleware, userController.welcome);//NO SE USA

router.get('/register/', userController.register);
router.post('/register/', registerValidation, registerMiddleware, userController.save);

router.get('/login', userController.login);
router.post('/login', loginValidation, userController.verify);

router.get('/', authMiddleware, userController.welcome);

router.get('/logout', authMiddleware, userController.logout);

 //router.post('/edit-login', userController.verifyedit);

router.get ('/edit-user/:id', authMiddleware, userController.accessEditUser);
router.post ('/edit-user/:id', authMiddleware, userController.editUser)


router.get ('/editsuccess', authMiddleware, userController.editsuccess);

module.exports = router;