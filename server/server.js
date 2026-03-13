const express = require('express');
const cors = require('cors');
require('dotenv').config();
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to GameVault API - Lab 3 MVC is Ready!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});