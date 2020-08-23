// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

const breadcrumbs = require('../middlewares/breadcrumbsMiddleware');

router.get('/', mainController.root); /* GET - home page */

//-----FOOTER- Contactatos------//

router.get('/terminos', breadcrumbs.breadcrumbsMiddleware(), mainController.terminos );

router.get('/politics', breadcrumbs.breadcrumbsMiddleware(), mainController.politics );

router.get('/informacion', breadcrumbs.breadcrumbsMiddleware(), mainController.informacion );


router.get('/sucursales', breadcrumbs.breadcrumbsMiddleware(), mainController.sucursales );

router.get('/devoluciones', breadcrumbs.breadcrumbsMiddleware(), mainController.devoluciones );

router.get('/pagos', breadcrumbs.breadcrumbsMiddleware(), mainController.pagos );


module.exports = router;
