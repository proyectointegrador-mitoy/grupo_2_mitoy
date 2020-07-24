const {check, validationResult, body} = require('express-validator');
 
module.exports = [
    check('email')
        .isEmail().withMessage('Mail incorrecto!'),
    check('password')
        .isLength({min: 4, max: 8}).withMessage('La Contrasena debe contener entre 4 y 8 caracteres!')
]