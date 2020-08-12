const db = require('../database/models');

const mainController = {
 	root: (req, res) => {
	     db.Product.findAll()
	     .then(function(products) {
			res.render('index', { products : products });
	     })	
	},
	politics: (req, res) => {
		res.render('politics', {breadcrumbs: req.breadcrumbs});
	},
	sucursales: (req, res) => {
		res.render('sucursales', {breadcrumbs: req.breadcrumbs});
	}

};

module.exports = mainController;


// const db = require('../database/models');

// function milSeparator(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// }

// let mainController = {
//   //TOP PRODUCTS - Vista index web
//   index: function(req, res, next) {
//     db.Producto.findAll({
//       where:{
//         top_check: {[db.Sequelize.Op.eq] : 1}
//       }
//     })
//     .then(function(losProductos) {
//       res.render('index', {losProductos, milesGenerator: milSeparator})
//     })
//   }
// }
// module.exports = mainController;