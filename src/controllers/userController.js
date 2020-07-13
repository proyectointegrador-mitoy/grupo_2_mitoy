const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');

let usuarios = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = {
    register: function(req, res) {
        res.render('login');
    },
    save: function(req, res, next) {
        //console.log(validationResult(req));
        //res.send(validationResult(req));
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            let nuevoUsuario = {
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            };
            usuarios.push(nuevoUsuario);
            fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSON.stringify(usuarios));
            return res.redirect('login');//UNA VEZ REGISTRADO
        } else {
            res.render('login', {
                errors: errors.mapped(),
                old: req.body
            });
        }
    }
}