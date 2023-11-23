import express from 'express';
import { criarLance, listarLances, obterLance, atualizarLance, excluirLance } from '../controllers/lanceController';

const router = express.Router();

// Rota para criar um novo lance
router.post('/criar', criarLance);

// Rota para listar todos os lances
router.get('/', listarLances);

// Rota para obter detalhes de um lance específico
router.get('/:id', obterLance);

// Rota para atualizar um lance existente
router.put('/:id', atualizarLance);

// Rota para excluir um lance
router.delete('/:id', excluirLance);

export default router;