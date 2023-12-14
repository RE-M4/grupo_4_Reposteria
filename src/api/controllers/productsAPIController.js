const db = require('../../database/models') //Se guardan todos los modelos existentes creados a través de Sequelize.

const productsAPIController = {
    all: function(req,res){
        db.Product.findAll().then(function(products){
            res.status(200).json({
                total: products.length,
                totalPerCategory : {
                    torta: products.filter(function(product){
                        return product.product_type == 'torta'
                    }).length,
                    masa_dulce: products.filter(function(product){
                        return product.product_type == 'masa-dulce'
                    }).length},
                products: products.map(({id, product_name, product_description}) => ({id, product_name, product_description}))
            })
        })
    },
    detail : function(req,res){
        db.Product.findByPk(req.params.id).then(function(product){
            res.status(200).json({
                id: product.id,
                name: product.product_name,
                price: product.price,
                discount: product.discount,
                description: product.product_description,
                ingredients: product.ingredients,
                image: product.image,
                type: product.product_type,
                stock: product.stock
            })
        })
    }
}

module.exports = productsAPIController;