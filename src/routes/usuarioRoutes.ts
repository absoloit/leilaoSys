import express from 'express';
import { criarUsuario, listarUsuarios, obterUsuario, atualizarUsuario, excluirUsuario } from '../controllers/usuarioController';

const router = express.Router();

// Rota para criar um novo usuário
router.post('/criar', criarUsuario);

// Rota para listar todos os usuários
router.get('/', listarUsuarios);

// Rota para obter detalhes de um usuário específico
router.get('/:id', obterUsuario);

// Rota para atualizar um usuário existente
router.put('/:id', atualizarUsuario);

// Rota para excluir um usuário
router.delete('/:id', excluirUsuario);

export default router;