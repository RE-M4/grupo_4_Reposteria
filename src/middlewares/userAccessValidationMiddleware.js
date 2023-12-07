const {body} = require('express-validator'); //Se importa el método 'body' de 'express-validator'
const db = require('../database/models') //Se guardan todos los modelos existentes creados a través de Sequelize.
const bcrypt = require('bcryptjs'); //Se importa BcryptJS para encriptar las contraseñas ingreadas por el formulario de ingreso.

const validations = [
    body('email')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isEmail().withMessage('El formato no es válido')
        .custom(value => {
            return db.User.findOne({where:{email:value}}).then(function(dataFound){
                if(!dataFound){
                    return Promise.reject('No existe una cuenta con este correo')
                }
            })
        }),
    body('password')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .custom((value, {req})=> {
            return db.User.findOne({where:{email:req.body.email}}).then(function(dataFound){
                if(!dataFound){
                    return Promise.reject(' ')
                } else {
                    if(!bcrypt.compareSync(value, dataFound.user_password)){
                        return Promise.reject('La contraseña es incorrecta')
                    }
                }
            })
        })

]

module.exports = validations;