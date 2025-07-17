
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(express.json())

app.use('/produtos', productRoutes);

mongoose.connect(process.env.MONGO_URI, {}).then(() => {
    console.log('🟢 Conectado ao MongoDB')
    app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
    });
}).catch((err) => {
    console.log('🔴 Erro ao conectar no MongoDB:', err.message)
})