const express = require('express'); //Se importa Express.
const router = express.Router(); //Se guarda la funcionalidad de Router en la variable.
const userAPIController = require('../controllers/userAPIController'); //Se importa el controlador de Usuarios.
const productsAPIController = require('../controllers/productsAPIController'); //Se importa el controlador de Productos.

router.get('/users', userAPIController.all);
router.get('/users/:id', userAPIController.detail);
router.get('/products', productsAPIController.all)
router.get('/products/:id', productsAPIController.detail)

module.exports = router;