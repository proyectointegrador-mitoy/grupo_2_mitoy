const {check, validationResult, body} = require('express-validator');
 
module.exports = [
    check('email')
        .isEmail().withMessage('Esto no es un mail.'),
    check('password')
        .isLength({min: 4, max: 10}).withMessage('La contraseña debe contener entre 4 y 10 caracteres.')
]