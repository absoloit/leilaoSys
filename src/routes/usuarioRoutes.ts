import express from 'express';
import { criarUsuario } from '../controllers/usuarioController';

const router = express.Router();

router.post('/criar', criarUsuario);

export default router;