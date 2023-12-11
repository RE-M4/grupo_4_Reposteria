const path = require('path');

const indexController = {
    index : function(req,res) {
        let user = req.session.user;
        res.render('index', {user:user})
    }
};

module.exports = indexController;