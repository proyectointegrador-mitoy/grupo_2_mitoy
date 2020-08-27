const db = require('../database/models');

// group_id = 1 => ADMIN

// group_id = 0 => USUARIO COMUN


let userVerifyMiddleware = {
  admin: function(req, res, next) {
    if (req.session.emailUsuario){
    db.User.findOne({
      where:{
        email: {[db.Sequelize.Op.eq] : req.session.emailUsuario}
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
    .catch(function(err) {
      console.log(err, req.body);
    });
    } else {
      res.locals.adminVerify = false
      next();
    }
  },
  usuario: function(req, res, next) {
    if (req.session.emailUsuario){
    db.User.findOne({
      where:{
        email: {[db.Sequelize.Op.eq] : req.session.emailUsuario}
      }
    })
    .then(function(user) {
      if(user.group_id == 0){
        res.locals.userVerify = true
        next();
      } 
      else {
        res.locals.userVerify = false
        next();
      }
    })
    } else {
      res.locals.userVerify = false
      next();
    }
  },
  session: function(req, res, next) {
    if (req.session.emailUsuario){
        res.locals.sessVerify = true
        next();
      
    } else {
      res.locals.sessVerify = false
      next();
    }
  }
}
  module.exports = userVerifyMiddleware;