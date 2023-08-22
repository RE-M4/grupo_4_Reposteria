const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

router.get('/all',productsController.all);
router.get('/details/:id',productsController.details)

module.exports = router;