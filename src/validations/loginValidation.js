const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
let usuarios = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = [
    check('email')
        .isEmail().withMessage('Mail incorrecto!'),
    check('password')
        .isLength({min: 4, max: 8}).withMessage('La Contrasena debe contener entre 4 y 8 caracteres!')
]