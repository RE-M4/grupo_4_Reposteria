const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

router.get('/all',productsController.all);
router.get('/details/:id',productsController.details)

router.get('/create', productsController.create);
router.post('/store', productsController.store);

router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.update);

router.delete('/delete/:id', productsController.delete);

module.exports = router;