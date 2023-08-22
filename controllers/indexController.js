const path = require('path');

const indexController = {
    index : function(req,res) {
        res.render('index')
    }
};

module.exports = indexController;