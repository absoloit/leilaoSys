import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario';
import { usuarioService } from '../services/usuarioService';

export const criarUsuario = async (req: Request, res: Response) => {
  try {
    const novoUsuario: Usuario = req.body;
    const usuario = await usuarioService.criarUsuario(novoUsuario);
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o usuário' });
  }
};