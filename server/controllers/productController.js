let products = require('../models/productModel');

exports.getAllGames = async (req, res) => {
    try {
        res.status(200).json({ success: true, data: products }); // [cite: 177, 193]
    } catch (error) {
        res.status(500).json({ success: false, message: error.message }); // [cite: 183, 237]
    }
};

exports.addGame = async (req, res) => {
    try {
        const { name, price } = req.body;
        const newGame = { id: products.length + 1, name, price };
        products.push(newGame);
        res.status(201).json({ message: "New game added!", data: newGame });
    } catch (error) {
        res.status(400).json({ success: false, message: "Failed to add game" });
    }
};

exports.deleteGame = async (req, res) => {
    try {
        const { id } = req.params;
        products = products.filter(game => game.id !== parseInt(id));
        res.status(200).json({ message: `Game with ID ${id} was deleted` });
    } catch (error) {
        res.status(404).json({ message: "Game not found" });
    }
};