const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');

let usuarios = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = {
    register: function(req, res) {
        res.render('register');
    },
    save: function(req, res, next) {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            let nuevoUsuario = {
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.files[0].filename
            };
            usuarios.push(nuevoUsuario);
            fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSON.stringify(usuarios));
            return res.redirect('login');
        } else {
            res.render('register', {
                errors: errors.mapped(),
                old: req.body
            });
        }
    }
}