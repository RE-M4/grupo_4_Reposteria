const {body} = require('express-validator'); //Se importa el método 'body' de 'express-validator'
const db = require('../database/models') //Se guardan todos los modelos existentes creados a través de Sequelize.

const validations = [
    body('nombre')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isAlpha().withMessage('Este campo solo puede contener letras')
        .isLength({min:2}).withMessage('Este campo debe tener al menos 2 caracteres'),
    body('apellido')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isAlpha().withMessage('Este campo solo puede contener letras')
        .isLength({min:2}).withMessage('Este campo debe tener al menos 2 caracteres'),
    body('email')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isEmail().withMessage('El formato no es válido')
        .custom(value => {
            return db.User.findOne({where:{email:value}}).then(function(dataFound){
                if(dataFound){
                    return Promise.reject('Este correo ya está en uso')
                }
            })
        }),
    body('domicilio')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isLength({min:5}).withMessage('Este campo debe tener al menos 5 caracteres'),
    body('password')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isLength({min:8}).withMessage('Este campo debe tener al menos 8 caracteres')
        .isStrongPassword({minLength:8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}).withMessage('La contraseña no cumple con los criterios obligatorios'),
    body('imagen')
        .custom((value, { req }) => {
            if(value === undefined){
                throw new Error('El formato de la imagen debe ser JPG, JPEG o PNG y es obligatorio')
            } else {
                if(req.file.mimetype != 'image/jpg' && req.file.mimetype != 'image/jpeg' && req.file.mimetype != 'image/png'){
                    throw new Error('El formato de la imagen debe ser JPG, JPEG o PNG')
                } else {
                    return true
                }
            }
        })
]

module.exports = validations;