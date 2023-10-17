const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')


// Middleware para verificar si el usuario está logueado
function authMiddleware(req, res, next) {
    if (req.session.user) {                     // Si el usuario está logueado
        next();                                 // Continuamos con la siguiente función 
    } else {                                    // Si no está logueado
        res.redirect('/login');                 // Lo redirigimos al login
    }
}

// Middleware para verificar si el usuario es un huésped
function guestMiddleware(req, res, next) {
    if (!req.session.user) {                    // Si el usuario no está logueado
        next();                                 // Continuamos con la siguiente función
    } else {                                    // Si está logueado
        res.redirect('/profile');               // Lo redirigimos al perfil
    }
}


router.get('/signup', guestMiddleware, userController.signUp); //Solo accesible si no estas logueado
router.get('/login', guestMiddleware, userController.logIn);

// Rutas para registro, inicio de sesión y cierre de sesión

router.get('/register', guestMiddleware, userController.register); // Solo accesible si no estás logueado
router.post('/register', guestMiddleware, usersController.create); // Solo accesible si no estás logueado
router.get('/login', guestMiddleware, usersController.login);  // Solo accesible si no estás logueado
router.post('/login', usersController.authenticate);
router.get('/logout', authMiddleware, usersController.logout); //Solo accesible si estas logueado
router.get('/profile', authMiddleware, userController.profile);


module.exports = router;