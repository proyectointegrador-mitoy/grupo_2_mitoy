const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
let usuarios = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = [
    check('email')
        .isEmail().withMessage('Esto no es un mail.'),
    check('password')
        .isLength({min: 4, max: 10}).withMessage('La contraseña debe contener entre 4 y 10 caracteres.')
]