const {check, validationResult, body} = require('express-validator');
const db = require('../database/models');

const productsController = {
	// Root - Show all products
	root: (req, res) => {
		db.Product.findAll()
		.then(function(products) {
		   res.render('products', { products : products , breadcrumbs : req.breadcrumbs });
		})	
    },

	// Detail - Detail from one product
	detail: (req, res, next) => {
        db.Product.findByPk(req.params.productId)
        .then(function(resultado) {
			res.render('detail', { elProducto : resultado , breadcrumbs : req.breadcrumbs});
		});	
	},

	// Create - Form to create
	create: (req, res) => {
		db.Material.findAll()
		.then(function(materiales) {
 			db.Color.findAll()
			.then(function(colores) {
				db.Category.findAll()
				.then(function(categorias) {
					res.render('product-create-form', { 
						materiales : materiales,
						colores : colores,
						categorias : categorias,
						breadcrumbs : req.breadcrumbs 
					});
				})					
			})				
		})	
	},
	
	// Create -  Method to store
	store:(req, res, next) => {

	      let errors = validationResult(req);
		  if (errors.isEmpty()) {
			  	const image = req.files[0] ? req.files[0].filename : null
			    db.Product.create({
			 		 name : req.body.name,
			 		 material_id : req.body.material,
					 price : req.body.price,
			 		 color_id : req.body.color,
			 		 discount : req.body.discount,
					 stock : req.body.stock,
			 		 category_id : req.body.category,
			 		 age : req.body.age,
					 description : req.body.description,
			 		 image : image
			  	})
			  	 .then(function(resultado) {
		 		  res.redirect('/products');				  
		     });		 	
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
		db.Material.findAll()
		.then(function(materiales) {
 			db.Color.findAll()
			.then(function(colores) {
				db.Category.findAll()
				.then(function(categorias) {
					db.Product.findByPk(req.params.productId)
					.then(function(resultado) {
 						res.render('product-edit-form', {
							 elProducto : resultado , 
							 materiales : materiales,
							 colores : colores,
							 categorias : categorias,							 
							 breadcrumbs : req.breadcrumbs
						});
					});	
				});				
			});		
		});
	},

	// Update - Method to update
	update: (req, res) => {
		db.Product.update({
			name : req.body.name,
			material_id : req.body.material,
		    price : req.body.price,
			color_id : req.body.color,
			discount : req.body.discount,
		    stock : req.body.stock,
			category_id : req.body.category,
			age : req.body.age,
		    description : req.body.description,
			//image : image
		  },
		  {
			where: {
			  id: req.params.productId
			}
		  })
		  .then(function() {
			res.redirect('/products/detail/' + req.params.productId);
		  }); 

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		db.Product.destroy({
			where: {
			  id: req.params.productId
			}
		  })
		  .then(function() {
			res.redirect('/products?status=ok')
		  });

	},

	shopping: (req, res) => {
		res.render('shopping', {breadcrumbs: req.breadcrumbs});
	},
	
	news: (req, res) => {
		db.Product.findAll ().then (resultado =>{
			console.log(resultado);
		})
		db.Product.findAll ({
			where: {
				category_id: 3
			}
		}).then (resultados => {
			console.log ('imprimiendo resultados' + resultados);
			res.render ('news', {resultados:resultados});
		})},

	onsale: (req, res) => {
		db.Product.findAll ({
			where: {
				category_id: 2
			}
		}).then (resultados => {
			console.log ('imprimiendo resultados' + resultados);
			res.render ('onsale', {resultados:resultados});
		});
	},
	allProducts: (req, res) => {
		db.Product.findAll()
		.then(function(products) {
		   res.render('all-products', { products : products , breadcrumbs : req.breadcrumbs });
		})	
	}
};

module.exports = productsController;