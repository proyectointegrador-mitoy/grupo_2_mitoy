const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const productsController = require('../controllers/productsController');
const breadcrumbs = require('../middlewares/breadcrumbsMiddleware');
const authMiddleware = require("../middlewares/authMiddleware");

const productsValidation = require('../validations/productsValidation');


let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images/products')
    },
    filename: (req, file, callback) => {
        callback(
            null,
            `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
        )
    },
})

let upload = multer({ storage })


/* ==========
A ESTAS RUTAS TODOS LOS USUARIOS
========== */


router.get('/detail/:productId/', breadcrumbs.breadcrumbsMiddleware(), productsController.detail);  

router.get('/shopping/', breadcrumbs.breadcrumbsMiddleware(), productsController.shopping);  

router.get('/all-products', productsController.allProducts);  

router.get ('/news', productsController.news);

router.get ('/onsale', productsController.onsale);

/* ==========
A ESTAS RUTAS SOLO PUEDEN ACCEDER LOS USUARIOS LOGUEADOS ADMIN
========== */

router.get('/', authMiddleware, breadcrumbs.breadcrumbsMiddleware(), productsController.root);  

router.get('/create/', authMiddleware, breadcrumbs.breadcrumbsMiddleware(), productsController.create); // --> ¡SOLO ADMIN!

router.post('/create/', authMiddleware, upload.any(), breadcrumbs.breadcrumbsMiddleware(), productsController.store); 
router.delete('/delete/:productId', authMiddleware, productsController.destroy); 
router.get('/edit/:productId', authMiddleware, breadcrumbs.breadcrumbsMiddleware(), productsController.edit); 
router.put('/edit/:productId', authMiddleware, productsController.update); 


module.exports = router;