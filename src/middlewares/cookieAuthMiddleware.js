const path = require('path'); //Se importa Path para hacer uso de funciones que controlan rutas de archivos.
const fs = require('fs'); //Se importa File System para lectura y escritura de archivos.

const usersFilePath = path.join(__dirname, '../data/users.json'); //La variable contiene la ruta en donde está el JSON de Usuarios.
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); //La variable contiene el JSON de Usuarios convertido en un array de objetos.
let db = require('../database/models');

//Middleware para trabajar con la cookie (si existe).
function cookieAuthMiddleware (req, res, next) {
    if(req.cookies.userId != undefined && req.session.user == undefined){
        db.User.findOne({where:{id:req.cookies.userId}}).then(function(user){
            if(user){
                req.session.user = user;
            }
        })
    }
    next();
}

module.exports = cookieAuthMiddleware;