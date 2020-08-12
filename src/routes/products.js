const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const productsController = require('../controllers/productsController');
const breadcrumbs = require('../middlewares/breadcrumbsMiddleware');

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

router.get('/', breadcrumbs.breadcrumbsMiddleware(), productsController.root); /* GET - Todos los productos */
router.get('/detail/:productId/', breadcrumbs.breadcrumbsMiddleware(), productsController.detail); /* GET - Detalle de un producto particular*/


router.get('/create/', breadcrumbs.breadcrumbsMiddleware(), productsController.create); /* GET - Formulario de creación de productos*/
//router.post('/create/', productsValidation, upload.any(), productsController.store); /* POST - Acción de creación (a donde se envía el formulario)*/
router.post('/create/',  upload.any(), productsController.store); 

router.get('/edit/:productId', breadcrumbs.breadcrumbsMiddleware(), productsController.edit); /* GET - Formulario de edición de productos */
router.put('/edit/:productId', productsController.update); /* PUT - Acción de edición (a donde se envía el formulario):*/

router.delete('/delete/:productId', productsController.destroy); /* DELETE - Acción de borrado*/

router.get('/shopping/', breadcrumbs.breadcrumbsMiddleware(), productsController.shopping); /* GET - Form to create */



module.exports = router;