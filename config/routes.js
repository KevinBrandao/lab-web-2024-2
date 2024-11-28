const alunoRoutes = require('../api/v1/alunos/aluno-routes');
const productRoutes = require('../api/v1/product/product-routes');

const routes = [...alunoRoutes, ...productRoutes];

module.exports = routes;
