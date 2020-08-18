const db = require ('../database/models');

function authMiddleware(req, res, next) {
    if(typeof req.session.emailUsuario != "undefined") {
        db.User.findOne({
            where: {
                email: req.session.emailUsuario
            }
        })
        .then(function(user) {
            res.locals.usuarioLogueado = {
                id: user.id,
                email: user.email,
                group: user.group_id
            }
            next();
        })
    } else {
        res.redirect('/users/login') // -----> REDIRECCIONAR A LOGIN
    }
 
}

module.exports = authMiddleware;