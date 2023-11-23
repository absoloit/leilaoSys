import express from 'express';
import { criarLeilao, listarLeiloes, obterLeilao, atualizarLeilao, excluirLeilao } from '../controllers/leilaoController';

const router = express.Router();

// Rota para criar um novo leilão
router.post('/criar', criarLeilao);

// Rota para listar todos os leilões
router.get('/', listarLeiloes);

// Rota para obter detalhes de um leilão específico
router.get('/:id', obterLeilao);

// Rota para atualizar um leilão existente
router.put('/:id', atualizarLeilao);

// Rota para excluir um leilão
router.delete('/:id', excluirLeilao);

export default router;