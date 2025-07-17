

const Product = require('../models/Product')

exports.getAllProducts = async (req, res) => {
    try{
        const produtos = await Product.find();
        res.json(produtos)
    }catch (err){
        res.status(500).json({ error: 'Erro ao buscar produtos'})
    }
}

exports.createProduct = async (req, res) => {
    try{
        const novoProduto = await Product.create(req.body);
        res.status(201).json(novoProduto);
    }catch (err) {
        res.status(400).json({ error: 'Erro ao criar produto'})
    }
}