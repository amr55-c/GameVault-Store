const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.use((req, res, next) => {
    console.log(`[Product Router] Request received at: ${new Date().toISOString()}`);
    next();
});

router.get('/', productController.getAllGames);
router.post('/', productController.addGame);
router.delete('/:id', productController.deleteGame);

module.exports = router;