const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Produto = database.sequelize.define('Produto', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        field: 'cod_produto',
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    marca: {
        type: Sequelize.STRING,
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    quantidadeEstoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    codigoBarras: {
        type: Sequelize.STRING,
    },
    dimensoes: {
        type: Sequelize.JSON, // Armazena altura, largura, profundidade e unidade de medida
    },
    peso: {
        type: Sequelize.JSON, // Armazena peso e unidade de medida
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: 'ativo',
    },
    dataCadastro: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
}, {
    tableName: 'produto',
    timestamps: false, // Desativa createdAt e updatedAt do Sequelize
});

module.exports = { Produto };
