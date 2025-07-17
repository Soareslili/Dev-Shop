
const mongoose = require('mongoose');

const produtcSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    preco: { type: Number, required: true},
    categoria: { type: String, required: true},
    descricao: { type: String},
    imagem: { type: String}
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', produtcSchema)