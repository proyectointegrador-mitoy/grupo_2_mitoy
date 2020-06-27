const fs = require('fs');
const path = require('path');
const { response } = require('../app');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	root: (req, res) => {
		res.render('products', { products : products });
	},

	// Detail - Detail from one product
	detail: (req, res) => {
        let productId = req.params.productId;
        products.forEach(function(elemento) {
            if(elemento.id == productId) {
           	     res.render('detail', {
                    elProducto: elemento
                });
		    }
        });		
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
 		let nuevoProducto = {
			id : (products.length + 1),
			...req.body	
		};

		products.push(nuevoProducto);
		let listaActualizada = JSON.stringify(products);
		fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'),listaActualizada);
		res.redirect('/products/detail/' + nuevoProducto.id);
	},

	// Update - Form to edit
	edit: (req, res) => {
        let productId = req.params.productId;
        products.forEach(function(elemento) {
            if(elemento.id == productId) {
           	     res.render('product-edit-form', {
                    elProducto: elemento
                });
		    }
        });	
	},
	// Update - Method to update
	update: (req, res) => {

 		let productoActualizado = {
			id : Number(req.params.productId),
			...req.body	
		};

		for(let i = 0; i < products.length; i++) {
			if(products[i].id == productoActualizado.id) {
				products[i] = productoActualizado;
				fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(products));
				res.redirect('/products/detail/' + productoActualizado.id)
			}
		}
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		for(let i = 0; i < products.length; i++) {
			if(products[i].id == req.params.productId) {
				let index = products.indexOf(products[i]);
				products.splice(index, 1);
				fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(products));
				res.redirect('/products?status=ok')
			}
		}	
	},

	shopping: (req, res) => {
		res.render('shopping');
	}
};

module.exports = controller;