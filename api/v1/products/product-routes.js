const productController = require('./product-controller');
const productSchema = require('./product-schema');

const baseVersion = '/v1';

const routes = [
    {
        method: 'POST',
        path: `${baseVersion}/produtos`,
        options: {
            handler: productController.createProduct,
            validate: productSchema.createProduto,
        },
    },
    {
        method: 'PUT',
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: productController.updateProduct,
            validate: productSchema.updateProduto,
        },
    },
    {
        method: 'DELETE',
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: productController.deleteProduct,
            validate: productSchema.deleteProduto,
        },
    },
    {
        method: 'GET',
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: productController.getProductById,
            validate: productSchema.consultaPorId,
        },
    },
    {
        method: 'GET',
        path: `${baseVersion}/produtos`,
        options: {
            handler: productController.getProducts,
            validate: productSchema.consultarProdutos,
        },
    },
];

module.exports = routes;
