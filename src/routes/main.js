// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

const breadcrumbs = require('../middlewares/breadCrumbsMiddleware');

router.get('/', mainController.root); /* GET - home page */

router.get('/politics', breadcrumbs.breadCrumbsMiddleware(), mainController.politics );



module.exports = router;
