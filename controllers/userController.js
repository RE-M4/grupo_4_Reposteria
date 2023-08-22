const path = require('path');

const userController = {
    signUp : function(req,res){
        res.render('register')
    },
    logIn : function(req,res){
        res.render('login2')
    },
    shopCart : function(req,res){
        res.render('shopping-cart')
    }
};

module.exports = userController;