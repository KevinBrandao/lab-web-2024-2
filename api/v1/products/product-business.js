const productModel = require('./product-model');

const save = async (product) => {
    const savedProduct = await productModel.Produto.create(product);
    return savedProduct;
};

const update = async (id, productData) => {
    const [updated] = await productModel.Produto.update(productData, {
        where: { id },
    });
    if (!updated) {
        throw new Error('Produto não encontrado para atualização');
    }
    return await productModel.Produto.findByPk(id);
};

const remove = async (id, logical = true) => {
    if (logical) {
        const [updated] = await productModel.Produto.update({ status: 'inativo' }, { where: { id } });
        if (!updated) throw new Error('Produto não encontrado para remoção lógica');
    } else {
        const deleted = await productModel.Produto.destroy({ where: { id } });
        if (!deleted) throw new Error('Produto não encontrado para remoção física');
    }
    return true;
};

const findById = async (id) => {
    const product = await productModel.Produto.findByPk(id);
    if (!product) throw new Error('Produto não encontrado');
    return product;
};

const list = async (filters) => {
    const where = {};
    if (filters.categoria) where.categoria = filters.categoria;
    if (filters.nome) where.nome = { [Sequelize.Op.like]: `%${filters.nome}%` };

    return await productModel.Produto.findAll({ where });
};

module.exports = { save, update, remove, findById, list };
