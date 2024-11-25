const productBusiness = require('./product-business');

const getProducts = async (request, h) => {
    const result = await productBusiness.list(request.query);
    return result;
};

const getProductById = async (request, h) => {
    const id = request.params.id;
    const result = await productBusiness.findById(id);
    return result;
};

const createProduct = async (request, h) => {
    const result = await productBusiness.save(request.payload);
    return h.response(result).code(201);
};

const updateProduct = async (request, h) => {
    const id = request.params.id;
    const result = await productBusiness.update(id, request.payload);
    return h.response(result).code(200);
};

const deleteProduct = async (request, h) => {
    const id = request.params.id;
    const logical = request.query.logical !== 'false'; // Default to logical deletion
    await productBusiness.remove(id, logical);
    return h.response().code(204);
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
