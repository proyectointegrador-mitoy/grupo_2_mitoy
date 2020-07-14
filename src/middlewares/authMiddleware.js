function authMiddleware(req, res, next) {   
    if (req.session.emailUsuario == undefined){
        return res.redirect('/login');
    } else {
        next();
    }
 
}

module.exports = authMiddleware;