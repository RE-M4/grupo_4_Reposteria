const {body} = require('express-validator'); //Se importa el método 'body' de 'express-validator'
const db = require('../database/models') //Se guardan todos los modelos existentes creados a través de Sequelize.

const validations = [
    body('nombre')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isLength({min:5}).withMessage('Este campo debe tener al menos 5 caracteres'),
    body('precio')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isNumeric().withMessage('Este campo solo puede contener números'),
    body('descuento')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isNumeric().withMessage('Este campo solo puede contener números'),
    body('descripcion')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isLength({min:20}).withMessage('Este campo debe tener al menos 20 caracteres'),
    body('ingredientes')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isLength({min:20}).withMessage('Este campo debe tener al menos 20 caracteres'),
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
        }),
    body('tipo')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail(),
    body('stock')
        .notEmpty().withMessage('Este campo no puede estar vacio').bail()
        .isNumeric().withMessage('Este campo solo puede contener números')
]

module.exports = validations;