const fs = require('fs');
const path = require('path');
const { response } = require('../app');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const {check, validationResult, body} = require('express-validator');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	root: (req, res) => {
		res.render('products', {products : products , breadcrumbs: req.breadcrumbs } );
	},

	// Detail - Detail from one product
	detail: (req, res) => {
        let productId = req.params.productId;
        products.forEach(function(elemento) {
            if(elemento.id == productId) {
           	     res.render('detail', {breadcrumbs: req.breadcrumbs, elProducto: elemento});
		    }
        });		
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form', {breadcrumbs: req.breadcrumbs});
	},
	
	// Create -  Method to store
	store:(req, res, next) => {

		let errors = validationResult(req);

		if (errors.isEmpty()) {

			const image = req.files[0] ? req.files[0].filename : null
			let nuevoProducto = {
				id : (products.length + 1),
				...req.body,
				image,	
			};

			products.push(nuevoProducto);
			let listaActualizada = JSON.stringify(products);
			fs.writeFileSync(path.join(__dirname, '../data/products.json'),listaActualizada);
			res.redirect('/products/detail/' + nuevoProducto.id);

		} else {

            res.render('product-create-form', {	
				breadcrumbs: req.breadcrumbs, 
				errors: errors.mapped(),
                old: req.body
            })
        }
	},

	// Update - Form to edit
	edit: (req, res) => {
        let productId = req.params.productId;
        products.forEach(function(elemento) {
            if(elemento.id == productId) {
           	     res.render('product-edit-form', {breadcrumbs: req.breadcrumbs, elProducto: elemento});
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
				fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(products));
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
				fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(products));
				res.redirect('/products?status=ok')
			}
		}	
	},

	shopping: (req, res) => {
		res.render('shopping', {breadcrumbs: req.breadcrumbs});
	}
};

module.exports = controller;