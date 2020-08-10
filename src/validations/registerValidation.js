const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
let usuarios = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = [
    check('email')
      .isEmail().withMessage('Mail incorrecto!'),
    body('email')
      .custom(function(value) {
        console.log(value);
        for(let i = 0; i < usuarios.length; i++) {
          if(usuarios[i].email == value) {
            return false;
          }
        }
        return true
      }).withMessage('El mail ya está registrado!'),
    check('password')
      .isLength({min: 4, max: 8}).withMessage('La Contrasena debe contener entre 4 y 8 caracteres!'),
    check('repassword')
      .isLength({min: 4, max: 8}).withMessage('La Contrasena debe contener entre 4 y 8 caracteres!')
];