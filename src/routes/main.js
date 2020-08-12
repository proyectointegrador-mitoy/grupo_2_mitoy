// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

const breadcrumbs = require('../middlewares/breadcrumbsMiddleware');

router.get('/', mainController.root); /* GET - home page */

router.get('/politics', breadcrumbs.breadcrumbsMiddleware(), mainController.politics );

router.get('/sucursales', breadcrumbs.breadcrumbsMiddleware(), mainController.sucursales );



module.exports = router;
