import { Request, Response } from 'express';
import { Leilao } from '../models/Leilao';
import { leilaoService } from '../services/leilaoService';
import { renderizarLeilao } from '../views/leilaoView';

export const criarLeilao = async (req: Request, res: Response) => {
  try {
    const novoLeilao: Leilao = req.body;
    const leilao = await leilaoService.criarLeilao(novoLeilao);
    const htmlLeilao = renderizarLeilao(leilao);
    res.send(htmlLeilao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o leilão' });
  }
};

export const listarLeiloes = async (req: Request, res: Response) => {
  try {
    const leiloes = await leilaoService.listarLeiloes();
    res.json(leiloes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os leilões' });
  }
};

export const obterLeilao = async (req: Request, res: Response) => {
  try {
    const leilaoId = parseInt(req.params.id, 10);
    const leilao = await leilaoService.obterLeilao(leilaoId);
    res.json(leilao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o leilão' });
  }
};

export const atualizarLeilao = async (req: Request, res: Response) => {
  try {
    const leilaoId = parseInt(req.params.id, 10);
    const dadosAtualizados: Leilao = req.body;
    const leilaoAtualizado = await leilaoService.atualizarLeilao(leilaoId, dadosAtualizados);

    if (leilaoAtualizado) {
      const htmlLeilao = renderizarLeilao(leilaoAtualizado);
      res.send(htmlLeilao);
    } else {
      res.status(404).json({ error: 'Leilão não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o leilão' });
  }
};

export const excluirLeilao = async (req: Request, res: Response) => {
  try {
    const leilaoId = parseInt(req.params.id, 10);
    await leilaoService.excluirLeilao(leilaoId);
    res.json({ message: 'Leilão excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o leilão' });
  }
};