const fs = require('fs');
const path = require('path');

function accessMiddleware(req, res, next) {
    fs.appendFileSync(path.join(__dirname, '../logs/accessLog.txt'), `Nuevo acceso: ${req.url}\n`);
    next();
}

module.exports = accessMiddleware;