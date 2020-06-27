const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const registerValidation = require('../validations/registerValidation');

const registerMiddleware = require('../middlewares/registerMiddleware');

 
router.get('/register/', userController.register);
router.post('/register/', registerValidation, registerMiddleware, userController.save);

  
module.exports = router;