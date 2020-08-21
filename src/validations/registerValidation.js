const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
//let usuarios = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'), 'utf8');
//usuarios = JSON.parse(usuarios);

const db = require('../database/models');


module.exports = [
    check('email')
      .isEmail().withMessage('Mail incorrecto!'),
    // body('email')
    //   .custom(function(value) {
    //     console.log(value);
    //     for(let i = 0; i < usuarios.length; i++) {
    //       if(usuarios[i].email == value) {
    //         return false;
    //       }
    //     }
    //     return true
    //   }).withMessage('El mail ya está registrado!'),


    body('email')
    .custom(async function(value) {
        let usuario = await db.User.findOne({ where: { email : value } })
        .then(function(elUsuario){
            if (elUsuario){
                return true
            } else{
                return false
            }
        })
        return usuario
    }).withMessage('Este mail no se encuentra registrado!'),
    
    check('password')
      .isLength({min: 4, max: 10}).withMessage('La Contrasena debe contener entre 4 y 10 caracteres!'),
    check('repassword')
      .isLength({min: 4, max: 10}).withMessage('La Contrasena debe contener entre 4 y 10 caracteres!')
];