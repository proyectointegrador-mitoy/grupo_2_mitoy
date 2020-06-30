const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
let usuarios = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = [
    check('email')
      .isEmail().withMessage('Mail incorrecto!'),
    body('email')
      .custom(function(value) {
        for(let i = 0; i < usuarios.length; i++) {
          if(usuarios[i].email == value) {
            return false;
          }
        }
        return true
      }).withMessage('El mail ya está registrado!'),
    check('password')
      .isLength({min: 6, max: 16}).withMessage('La Passwor debe contener entre 6 y 16 caracteres!')
];