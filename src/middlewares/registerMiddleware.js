const fs = require('fs');
const path = require('path');

function registerMiddleware(req, res, next) {
    fs.appendFileSync(path.join(__dirname, '../logs/registerLog.txt'), `Nuevo usuario: ${req.body.email}\n`)
    next();
}

module.exports = registerMiddleware;