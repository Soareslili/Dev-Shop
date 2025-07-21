

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

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const produtoAtualizado = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!produtoAtualizado) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(produtoAtualizado);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao atualizar produto' });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const produtoDeletado = await Product.findByIdAndDelete(id);
    if (!produtoDeletado) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json({ message: 'Produto deletado com sucesso' });
  } catch (err) {
    res.status(400).json({ error: 'Erro ao deletar produto' });
  }
};
