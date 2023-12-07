const express = require('express'); //Se importa Express.
const router = express.Router(); //Se guarda la funcionalidad de Router en la variable.
const productsController = require('../controllers/productsController'); //Se importa el controlador de Productos.
const multer = require('multer'); //Se importa Multer para la subida y manejo de archivos en formularios.
const path = require('path'); //Se importa Path para hacer uso de funciones que controlan rutas de archivos.
const storage = require('../middlewares/multerProductsMiddleware'); //Se importa la configuración de Multer para Products. 
const productsValidation = require('../middlewares/productCreateEditValidationMiddleware');

const upload = multer({ storage: storage });

router.get('/all',productsController.all); //Listado de productos.
router.get('/details/:id',productsController.details); //Detalle de un producto.

router.get('/create', productsController.create); //Formulario para crear un nuevo producto.
router.post('/store', upload.single('imagen'), productsValidation, productsController.store); //Guardar un nuevo producto.

router.get('/edit/:id', productsController.edit); //Formulario para editar un producto.
router.put('/edit/:id', upload.single('imagen'), productsValidation, productsController.update); //Guardar cambios.

router.delete('/delete/:id', productsController.delete); //Eliminar un producto.

module.exports = router;