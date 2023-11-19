const path = require('path'); //Se importa Path para hacer uso de funciones que controlan rutas de archivos.
const fs = require('fs'); //Se importa File System para lectura y escritura de archivos.

const productsFilePath = path.join(__dirname, '../data/products.json'); //La variable contiene la ruta en donde está el JSON de Productos.
const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8')); //La variable contiene el JSON de Productos convertido en un array de objetos.

/**
 * Esta función guarda un objeto dentro del array de objetos,
 * convierte la variable modificada en un JSON y sobreescribe
 * /data/products.json con los cambios aplicados.
 * (Es llamada cada vez que se crea un nuevo producto).
 */
function addProduct(product){
    products.push(product);
    productJSON = JSON.stringify(products);
    fs.writeFileSync(productsFilePath,productJSON);
}

/**
 * Esta función convierte la variable que contiene el array de
 * objetos a un JSON y sobreescribe /data/products.json con los
 * cambios aplicados.
 * (Es llamada cada vez que se edita o elimina un producto).
 */
function updateDB(){
    productJSON = JSON.stringify(products);
    fs.writeFileSync(productsFilePath,productJSON);
}

/** CONTROLADOR */
const productsController = {
    all : function(req,res){
        res.render('products', {products: products})
    },
    details : function(req,res){
        let id = req.params.id;
        let productFound = products.find(function(product){
            return product.id == id;
        })
        res.render('product-detail', {product: productFound, products: products})
    },
    create : function(req,res){
        res.render('product-create');
    },
    store : function(req,res,next){
        let formData = req.body;
        let formFile = req.file;
        if(!formFile){
            const error = new Error('No se seleccionó una imagen')
            error.httpStatusCode = 400
            return next(error)
        } else {
            const productNew = {
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
            addProduct(productNew);
            res.redirect('/products/all')
        }
    },
    edit : function(req,res){
        let id = req.params.id;
        let productFound = products.find(function(product){
            return product.id == id;
        })
        res.render('product-edit', {product: productFound})
    },
    update : function(req,res){
        let id = req.params.id;
        let formData = req.body;
        console.log(req.body);
        console.log(req.file);
        let formFile = req.file;
        let productFound = products.find(function(product){
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
        updateDB();
        res.redirect('/products/all');
    },
    delete : (req, res) => {
		let id = req.params.id;
		found = false;
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
		updateDB();
		res.redirect('/products/all')
	}
};

module.exports = productsController;