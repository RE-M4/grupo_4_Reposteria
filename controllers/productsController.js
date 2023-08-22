const path = require('path');

const productsController = {
    all : function(req,res){
        res.render('productos')
    },
    details : function(req,res){
        res.render('detalle2')
    }
};

module.exports = productsController;