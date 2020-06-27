const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/', productsController.root); /* GET - All products */
router.get('/detail/:productId/', productsController.detail); /* GET - Product detail */


router.get('/create/', productsController.create); /* GET - Form to create */
router.post('/create/', productsController.store); /* POST - Store in DB */

router.get('/shopping/', productsController.shopping); /* GET - Form to create */


router.get('/edit/:productId', productsController.edit); /* GET - Form to create */
router.put('/edit/:productId', productsController.update); /* PUT - Update in DB */


router.delete('/delete/:productId', productsController.destroy); /* DELETE - Delete from DB */

module.exports = router;
