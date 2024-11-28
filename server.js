const Hapi = require('@hapi/hapi');
const routes = require('./config/routes'); // Importe as rotas configuradas

const init = async () => {
    // Criação do servidor
    const server = Hapi.server({
        port: 3000, // Porta do servidor
        host: 'localhost', // Pode ser alterado para 0.0.0.0 para acesso externo
    });

    // Registro das rotas
    server.route(routes);

    // Inicialização do servidor
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

// Exporte a função de inicialização
module.exports = { start: init };
