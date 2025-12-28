const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/produtos', productRoutes);

app.get('/', (req, res) => res.send('API rodando 🚀'));

if (!mongoose.connection.readyState) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('🟢 Conectado ao MongoDB'))
    .catch(err => console.log('🔴 Erro MongoDB:', err.message));
}

module.exports = app;
