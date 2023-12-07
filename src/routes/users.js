const express = require('express'); //Se importa Express.
const router = express.Router(); //Se guarda la funcionalidad de Router en la variable.
const userController = require('../controllers/usersController'); //Se importa el controlador de Usuarios.
const multer = require('multer'); //Se importa Multer para la subida y manejo de archivos en formularios.
const path = require('path'); //Se importa Path para hacer uso de funciones que controlan rutas de archivos.
const storage = require('../middlewares/multerUsersMiddleware') //Se importa la configuración de Multer para Users;
const registerValidations = require('../middlewares/userRegistrationValidationMiddleware');
const accessValidations = require('../middlewares/userAccessValidationMiddleware');

const upload = multer({ storage: storage });

//Middleware para verificar si el usuario está logueado.
function authMiddleware(req, res, next) {
    if (req.session.user) {                     // Si el usuario está logueado,
        next();                                 // continuamos con la siguiente función.
    } else {                                    // Si no está logueado,
        res.redirect('/user/login');            // lo redirigimos al login.
    }
}

//Middleware para verificar si el usuario es un huésped (tipo "user").
function guestMiddleware(req, res, next) {
    if (!req.session.user) {                    // Si el usuario no está logueado,
        next();                                 // continuamos con la siguiente función.
    } else {                                    // Si está logueado,
        res.redirect('/user/profile');          // lo redirigimos al perfil.
    }
}

router.get('/signup', guestMiddleware, userController.signup); //Formulario de registro (solo accesible si no estás logueado).
router.post('/register', upload.single('imagen'), registerValidations, userController.create); //Crear un nuevo usuario.
router.get('/login', guestMiddleware, userController.login); //Formulario de ingreso (solo accesible si no estás logueado).
router.post('/login', accessValidations, userController.authenticate); //Inicio de sesión de un usuario (guardado en una session de forma obligatoria y en una cookie de forma opcional).
router.post('/logout', authMiddleware, userController.logout); //Función para cerrar sesión (destruye la session y limpia la cookie).
router.get('/profile', authMiddleware, userController.profile); //Perfil de usuario (solo accesible si estás logueado).


module.exports = router;