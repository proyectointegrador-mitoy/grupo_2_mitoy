const db = require('../database/models');

function authCookieMiddleware(req, res, next) {
  if(req.cookies.authRemember){
    db.User.findOne({
      where:{
        email:req.cookies.authRemember
      }
    })
    .then(function(users) {
      // return res.send(users.email)
      if(req.session.emailUsuario == undefined) {
        req.session.emailUsuario = users.email
      }
      
    })
    next();
  } else {
  next();
}
}
module.exports = authCookieMiddleware;



/*

function authCookieMiddleware(req,res,next) {
    if (req.cookies.authRemember != undefined && req.session.emailUsuario == undefined) {    
        req.session.emailUsuario = req.cookies.authRemember
    } 
    next();
}

module.exports = authCookieMiddleware;



PARA ESCRIBIR UNA COOKIE:

res.cookie (nombre, valorm {maxAge : tiempo})


PARA LEER UNA COOKIE, TENGO QUE BUSCAR TODAS LAS COOKIES:

req.cookies.nombreCookie

*/


