const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/signup',userController.signUp);
router.get('/login',userController.logIn);

module.exports = router;