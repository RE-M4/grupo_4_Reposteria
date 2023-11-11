const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


function addUser(user) {
    users.push(user);
    let usersJSON = JSON.stringify(users);
    fs.writeFileSync(usersFilePath, usersJSON);
}

const userController = {
    signup : function(req,res){
        res.render('register')
    },
    create: (req,res) =>{
        
    },
    login : function(req,res){
        res.render('login')
    },

    authenticate: function(req, res){
        let formData = req.body;
        let userFound = users.find(function(user){
            return user.username == formData.username && bcrypt.compareSync(formData.password, user.password);
        })
        if(userFound){
            req.session.user = userFound;
            if(formData.remember){
                res.cookie('userId', userFound.id, {maxAge: 30 * 24 * 60 * 60 * 1000});
            }
            res.redirect('/profile');
        }else{
            res.redirect('/login');
        }
    },
    logout: function(req, res){
        req.session.destroy();
        if(req.cookies.userId){
            res.clearCookie('userId');
        }
        res.redirect('/');
    },

    shopCart : function(req,res){
        res.render('shopping-cart')
    },
    register: function(req, res){
        res.render('register');
    },
    create: function(req, res){
        let formData = req.body;
        const newUser = {
            id: user.length + 1,
            first_name: formData.first_name,
            last_name: formData.last_name,
            username: formData.username,
            password: bcrypt.hashSync(formData.password, 10), //Encriptacion de la contraseña
            email: formData.email,
            image: req.file ? req.file.filename : null //Configurar multer para manejar la subida del archivo
        }
        addUser(newUser);
        res.redirect('/login');
    },
    profile: function(req, res){
        res.render('profile', {user: req.session.user});
    }
};

module.exports = userController;