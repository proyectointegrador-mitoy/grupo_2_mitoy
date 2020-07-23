function authMiddleware(req, res, next) {   
    if (req.session.emailUsuario == undefined){
        return res.redirect('/edit');
    } else {
        next();
    }
 
}

module.exports = authMiddleware;