const productController = require('./product-controller');
const productSchema = require('./product-schema');
const productRoutes = require('../api/v1/product/product-routes.js');

const baseVersion = '/v1';

const routes = [
    {
        method: 'POST',
        path: `${baseVersion}/product`,
        options: {
            handler: productController.createProduct,
            validate: productSchema.createProduto,
        },
    },
    {
        method: 'PUT',
        path: `${baseVersion}/product/{id}`,
        options: {
            handler: productController.updateProduct,
            validate: productSchema.updateProduto,
        },
    },
    {
        method: 'DELETE',
        path: `${baseVersion}/product/{id}`,
        options: {
            handler: productController.deleteProduct,
            validate: productSchema.deleteProduto,
        },
    },
    {
        method: 'GET',
        path: `${baseVersion}/product/{id}`,
        options: {
            handler: productController.getProductById,
            validate: productSchema.consultaPorId,
        },
    },
    {
        method: 'GET',
        path: `${baseVersion}/product`,
        options: {
            handler: productController.getProducts,
            validate: productSchema.consultarproduct,
        },
    },
];

module.exports = routes;
