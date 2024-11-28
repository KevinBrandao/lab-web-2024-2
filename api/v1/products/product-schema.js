const Joi = require('joi');

const createProduto = {
    payload: Joi.object({
        id: Joi.string().required(),
        nome: Joi.string().min(2).required(),
        descricao: Joi.string().optional(),
        categoria: Joi.string().required(),
        marca: Joi.string().optional(),
        preco: Joi.number().positive().required(),
        quantidadeEstoque: Joi.number().integer().min(0).required(),
        codigoBarras: Joi.string().optional(),
        dimensoes: Joi.object({
            altura: Joi.number().positive().required(),
            largura: Joi.number().positive().required(),
            profundidade: Joi.number().positive().required(),
            unidadeMedida: Joi.string().valid('cm', 'm', 'mm').required(),
        }).required(),
        peso: Joi.object({
            valor: Joi.number().positive().required(),
            unidadeMedida: Joi.string().valid('kg', 'g').required(),
        }).required(),
        status: Joi.string().valid('ativo', 'inativo').default('ativo'),
        dataCadastro: Joi.date().default(new Date().toISOString()),
    }),
};

const updateProduto = {
    payload: Joi.object({
        nome: Joi.string().min(2).optional(),
        descricao: Joi.string().optional(),
        categoria: Joi.string().optional(),
        marca: Joi.string().optional(),
        preco: Joi.number().positive().optional(),
        quantidadeEstoque: Joi.number().integer().min(0).optional(),
        codigoBarras: Joi.string().optional(),
        dimensoes: Joi.object({
            altura: Joi.number().positive().optional(),
            largura: Joi.number().positive().optional(),
            profundidade: Joi.number().positive().optional(),
            unidadeMedida: Joi.string().valid('cm', 'm', 'mm').optional(),
        }).optional(),
        peso: Joi.object({
            valor: Joi.number().positive().optional(),
            unidadeMedida: Joi.string().valid('kg', 'g').optional(),
        }).optional(),
        status: Joi.string().valid('ativo', 'inativo').optional(),
    }),
    params: Joi.object({
        id: Joi.string().required(),
    }),
};

const deleteProduto = {
    params: Joi.object({
        id: Joi.string().required(),
    }),
    query: Joi.object({
        logical: Joi.boolean().optional(),
    }),
};

const consultaPorId = {
    params: Joi.object({
        id: Joi.string().required(),
    }),
};

const consultarProdutos = {
    query: Joi.object({
        categoria: Joi.string().optional(),
        nome: Joi.string().min(2).optional(),
    }),
};

module.exports = { createProduto, updateProduto, deleteProduto, consultaPorId, consultarProdutos };
