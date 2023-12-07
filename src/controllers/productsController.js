const path = require('path'); //Se importa Path para hacer uso de funciones que controlan rutas de archivos.
const fs = require('fs'); //Se importa File System para lectura y escritura de archivos.
const db = require('../database/models') //Se guardan todos los modelos existentes creados a través de Sequelize.
const { validationResult } = require('express-validator') //Se importa la función para trabajar con las validaciones.

//const productsFilePath = path.join(__dirname, '../data/products.json'); //La variable contiene la ruta en donde está el JSON de Productos.
//const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8')); //La variable contiene el JSON de Productos convertido en un array de objetos.

/**
 * Esta función guarda un objeto dentro del array de objetos,
 * convierte la variable modificada en un JSON y sobreescribe
 * /data/products.json con los cambios aplicados.
 * (Es llamada cada vez que se crea un nuevo producto).
 */
/*function addProduct(product){
    products.push(product);
    productJSON = JSON.stringify(products);
    fs.writeFileSync(productsFilePath,productJSON);
}*/

/**
 * Esta función convierte la variable que contiene el array de
 * objetos a un JSON y sobreescribe /data/products.json con los
 * cambios aplicados.
 * (Es llamada cada vez que se edita o elimina un producto).
 */
/*function updateDB(){
    productJSON = JSON.stringify(products);
    fs.writeFileSync(productsFilePath,productJSON);
}*/

/** CONTROLADOR */
const productsController = {
    all : function(req,res){
        db.Product.findAll().then(function(products){
            res.render('products', {products: products})
        })
        //res.render('products', {products: products}) USADO PARA JSON.
    },
    details : function(req,res){
        let id = req.params.id;
        let productFound = db.Product.findOne({where:{id:id}})
        let allProducts = db.Product.findAll()
        Promise.all([productFound,allProducts]).then(function([productFound,allProducts]){
            res.render('product-detail', {product: productFound, products: allProducts})
        })
        /*let productFound = products.find(function(product){
            return product.id == id;
        })
        res.render('product-detail', {product: productFound, products: products}) USADO PARA JSON.*/
    },
    create : function(req,res){
        res.render('product-create');
    },
    store : function(req,res,next){
        let formData = req.body;
        let formFile = req.file;
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Product.create({
                product_name: formData.nombre,
                price: formData.precio,
                discount: formData.descuento,
                product_description: formData.descripcion,
                ingredients: formData.ingredientes,
                image: formFile.filename,
                product_type: formData.tipo,
                stock: formData.stock
            })
            res.redirect('/products/all')
        } else {
            res.render('product-create', {errors:errors.mapped(), oldData: formData})
        }
        /*const productNew = {
            id: products.length + 1,
            name: formData.nombre,
            price: formData.precio,
            discount: formData.descuento,
            description: formData.descripcion,
            ingredients: formData.ingredientes,
            image: formFile.filename,
            type: formData.tipo,
            stock: formData.stock
        }
        addProduct(productNew); USADO PARA JSON.*/
    },
    edit : function(req,res){
        let id = req.params.id;
        db.Product.findOne({where:{id:id}}).then(function(productFound){
            res.render('product-edit', {product: productFound})
        })
        /*let productFound = products.find(function(product){
            return product.id == id;
        })
        res.render('product-edit', {product: productFound}) USADO PARA JSON.*/
        
    },
    update : function(req,res){
        let id = req.params.id;
        let formData = req.body;
        let formFile = req.file;
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Product.update(
                {
                    product_name: formData.nombre,
                    price: formData.precio,
                    discount: formData.descuento,
                    product_description: formData.descripcion,
                    ingredients: formData.ingredientes,
                    image: formFile.filename,
                    product_type: formData.tipo,
                    stock: formData.stock
                },
                {
                    where:{
                        id: id
                    }
                }
            )
            res.redirect('/products/all');
        } else {
            db.Product.findOne({where:{id:id}}).then(function(productFound){
                res.render('product-edit', {errors:errors.mapped(), oldData: formData, product:productFound})
            })
            
        }
        /*let productFound = products.find(function(product){
            return product.id == id;
        })
        productFound.name = formData.nombre;
        productFound.price = formData.precio;
        productFound.discount = formData.descuento;
        productFound.description = formData.descripcion;
        productFound.ingredients = formData.ingredientes;
        productFound.image = formFile.filename;
        productFound.type = formData.tipo;
        productFound.stock = formData.stock;
        updateDB(); USADO PARA JSON.*/
    },
    delete : (req, res) => {
		let id = req.params.id;
        db.Product.destroy({
            where:{
                id: id
            }
        })
		/*found = false;
		i = 0;
		while(!found){
			if(products[i].id == id){
				products.splice(i,1);
				found = true;
			}
			else {
				i++;
			}
		}
		updateDB(); USADO PARA JSON.*/
		res.redirect('/products/all') 
	}
};

module.exports = productsController;