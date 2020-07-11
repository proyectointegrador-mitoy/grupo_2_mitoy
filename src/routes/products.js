const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const productsController = require('../controllers/productsController');


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

router.get('/', productsController.root); /* GET - Todos los productos */
router.get('/detail/:productId/', productsController.detail); /* GET - Detalle de un producto particular*/

router.get('/create/', productsController.create); /* GET - Formulario de creación de productos*/
router.post('/create/', upload.any(), productsController.store); /* POST - Acción de creación (a donde se envía el formulario)*/

router.get('/edit/:productId', productsController.edit); /* GET - Formulario de edición de productos */
router.put('/edit/:productId', productsController.update); /* PUT - Acción de edición (a donde se envía el formulario):*/

router.delete('/delete/:productId', productsController.destroy); /* DELETE - Acción de borrado*/


router.get('/shopping/', productsController.shopping); /* GET - Form to create */



module.exports = router;