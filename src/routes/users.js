const express = require('express');
const router = express.Router();
const multer = require('multer');

const userController = require('../controllers/userController');

const registerMiddleware = require('../middlewares/registerMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const userIdMiddleware = require('../middlewares/userIdMiddleware');



const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');

/**************  MULTER **************/
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/images/uploads/users'))
    },
    filename: function (req, file, cb) {
      cb(null, req.body.email + path.extname(file.originalname))
    }
})
let upload = multer({ storage: storage })



router.get('/welcome/', authMiddleware, userController.welcome);//NO SE USA

router.get('/register/', userController.register);
router.post('/register/', registerValidation, registerMiddleware, userController.save);

router.get('/login', userController.login);
router.post('/login', loginValidation, userController.verify);

router.get('/', authMiddleware, userController.welcome);

router.get('/logout', authMiddleware, userController.logout);

router.get ('/edit-user/:id', authMiddleware, userIdMiddleware.searchId, userController.accessEditUser);
router.put ('/edit-user/:id', upload.any(), authMiddleware, userIdMiddleware.searchId,  userController.editUser)


router.get ('/editsuccess', authMiddleware, userController.editsuccess);

module.exports = router;