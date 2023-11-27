const fs = require('fs'); //Se importa File System para lectura y escritura de archivos.
const path = require('path'); //Se importa Path para hacer uso de funciones que controlan rutas de archivos. 
const bcrypt = require('bcryptjs'); //Se importa BcryptJS para encriptar las contraseñas ingreadas por el formulario de ingreso.

const usersFilePath = path.join(__dirname, '../data/users.json'); //La variable contiene la ruta en donde está el JSON de Usuarios.
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); //La variable contiene el JSON de Usuarios convertido en un array de objetos.

/**
 * Esta función guarda un objeto dentro del array de objetos,
 * convierte la variable modificada en un JSON y sobreescribe
 * /data/users.json con los cambios aplicados.
 * (Es llamada cada vez que se crea un nuevo usuario).
 */
function addUser(user) {
    users.push(user);
    usersJSON = JSON.stringify(users);
    fs.writeFileSync(usersFilePath, usersJSON);
}

/**
 * Esta función convierte la variable que contiene el array de
 * objetos a un JSON y sobreescribe /data/users.json con los
 * cambios aplicados.
 * (Es llamada cada vez que se edita o elimina un usuario).
 */
function updateDB(){
    usersJSON = JSON.stringify(users);
    fs.writeFileSync(usersFilePath, usersJSON);
}

/** CONTROLADOR */
const userController = {
    signup : function(req,res){
        res.render('register')
    },
    create: function(req, res, next){
        let formData = req.body;
        let formFile = req.file;
        if(!formFile){
            const error = new Error('No se seleccionó una imagen')
            error.httpStatusCode = 400
            return next(error)
        } else {
            const newUser = {
                id: users.length + 1,
                first_name: formData.nombre,
                last_name: formData.apellido,
                email: formData.email,
                domicilio: formData.domicilio,
                password: bcrypt.hashSync(formData.password, 10), //Se encripta la contraseña.
                category: "user",
                image: formFile.filename
            }
            addUser(newUser);
            res.redirect('/');
        }
    },
    login : function(req,res){
        res.render('login')
    },
    authenticate: function(req, res){
        let formData = req.body;
        let userFound = users.find(function(user){
            return user.email == formData.email && bcrypt.compareSync(formData.password, user.password);
        })
        console.log("Dato de remember-me: " + formData.rememberme);
        console.log("Tipo de dato de remember-me: " + typeof(formData.rememberme));
        if(userFound){
            req.session.user = userFound;
            if(formData.rememberme != undefined){
                res.cookie('userId', userFound.id, {maxAge: 30 * 24 * 60 * 60 * 1000});
            }
            res.redirect('/user/profile');
        }else{
            res.redirect('/user/login');
        }
    },
    logout: function(req, res){
        req.session.destroy();
        if(req.cookies.userId){
            res.clearCookie('userId');
        }
        res.redirect('/');
    },
    profile: function(req, res){
        res.render('profile', {user: req.session.user});
    }
};

module.exports = userController;