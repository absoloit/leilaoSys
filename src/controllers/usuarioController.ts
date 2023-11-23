import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario';
import { usuarioService } from '../services/usuarioService';
import { renderizarUsuario } from '../views/usuarioView';

export const criarUsuario = async (req: Request, res: Response) => {
  try {
    const novoUsuario: Usuario = req.body;
    const usuario = await usuarioService.criarUsuario(novoUsuario);
    const htmlUsuario = renderizarUsuario(usuario);
    res.send(htmlUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o usuário' });
  }
};

export const listarUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await usuarioService.listarUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os usuários' });
  }
};

export const obterUsuario = async (req: Request, res: Response) => {
  try {
    const usuarioId = parseInt(req.params.id, 10);
    const usuario = await usuarioService.obterUsuario(usuarioId);
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o usuário' });
  }
};

export const atualizarUsuario = async (req: Request, res: Response) => {
  try {
    const usuarioId = parseInt(req.params.id, 10);
    const dadosAtualizados: Usuario = req.body;
    const usuarioAtualizado = await usuarioService.atualizarUsuario(usuarioId, dadosAtualizados);

    if (usuarioAtualizado) {
      const htmlUsuario = renderizarUsuario(usuarioAtualizado);
      res.send(htmlUsuario);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o usuário' });
  }
};

export const excluirUsuario = async (req: Request, res: Response) => {
  try {
    const usuarioId = parseInt(req.params.id, 10);
    await usuarioService.excluirUsuario(usuarioId);
    res.json({ message: 'Usuário excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o usuário' });
  }
};