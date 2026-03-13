const products = require('../models/productModel');


exports.getProducts = (req, res) => {
    res.json(products);
};

exports.getProductById = (req, res) => {
    const item = products.find(p => p.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ message: 'Item not found in our vault' });
    res.json(item);
};