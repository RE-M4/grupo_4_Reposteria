const db = require('../../database/models') //Se guardan todos los modelos existentes creados a través de Sequelize.

const userAPIController = {
    all: function(req,res){
        db.User.findAll().then(function(users){
            res.status(200).json({
                total: users.length,
                users: users.map(({id, first_name, last_name, email}) => ({id, first_name, last_name, email, })),
            })
        })
    },
    detail: function(req,res){
        db.User.findByPk(req.params.id).then(function(user){
            res.status(200).json({
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                home: user.home,
                image: user.image
            })
        })
    }
}

module.exports = userAPIController;