const express = require('express');
const logger = require('./middleware/logger'); 
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json()); 
app.use(logger);         

app.use('/api/products', productRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Vault Server is running on http://localhost:${PORT}`);
    const cors = require('cors');
app.use(cors());
});