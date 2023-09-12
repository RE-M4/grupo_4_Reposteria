const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));

function addProduct(product){
    products.push(product);
    productJSON = JSON.stringify(products);
    fs.writeFileSync(productsFilePath,productJSON);
}

function updateDB(){
    productJSON = JSON.stringify(products);
    fs.writeFileSync(productsFilePath,productJSON);
}

const productsController = {
    all : function(req,res){
        res.render('productos', {products: products})
    },
    details : function(req,res){
        let id = req.params.id;
        let productFound = products.find(function(product){
            return product.id == id;
        })
        res.render('detalle2', {product: productFound})
    },
    create : function(req,res){
        res.render('cargarProducto');
    },
    store : function(req,res){
        let formData = req.body;
        const productNew = {
            id: products.length + 1,
            name: formData.name,
            description: formData.description,
            category: formData.category,
            color: formData.color,
            price: formData.price
        }
        addProduct(productNew);
        res.redirect('/products/all')
    },
    edit : function(req,res){
        let id = req.params.id;
        let productFound = products.find(function(product){
            return product.id == id;
        })
        res.render('editarProducto', {product: productFound})
    },
    update : function(req,res){
        let id = req.params.id;
        let formData = req.body;
        let productFound = products.find(function(product){
            return product.id == id;
        })
        productFound.name = formData.name;
        productFound.description = formData.description;
        productFound.category = formData.category;
        productFound.color = formData.color;
        productFound.price = formData.price;
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
		res.redirect('/products')
	}
};

module.exports = productsController;