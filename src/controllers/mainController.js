const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
 	root: (req, res) => {
		let elementoBuscado = req.query.keywords;

		let inSale = products.filter(function (elemento) {
			return elemento.category == 'in-sale';
		});

		let visited = products.filter(function (elemento) {
			return elemento.category == 'visited';
		});	
		
		res.render('index', { products : products });
	},
	politics: (req, res) => {
		res.render('politics', {breadcrumbs: req.breadcrumbs});
	},
	sucursales: (req, res) => {
		res.render('sucursales', {breadcrumbs: req.breadcrumbs});
	}

};

module.exports = controller;
