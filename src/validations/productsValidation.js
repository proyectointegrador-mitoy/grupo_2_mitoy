const {check, validationResult, body} = require('express-validator');

module.exports = [
    check('name')
        .isLength({min: 1, max: 255}).withMessage('Campo obligatorio o Supera el limite de caracteres!')
]