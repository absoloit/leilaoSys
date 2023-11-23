import { Request, Response } from 'express';
import { Lance } from '../models/Lance';
import { lanceService } from '../services/lanceService';
import { renderizarLance } from '../views/lanceView';

export const criarLance = async (req: Request, res: Response) => {
  try {
    const novoLance: Lance = req.body;
    const lance = await lanceService.criarLance(novoLance);
    const htmlLance = renderizarLance(lance);
    res.send(htmlLance);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o lance' });
  }
};

export const listarLances = async (req: Request, res: Response) => {
  try {
    const lances = await lanceService.listarLances();
    res.json(lances);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os lances' });
  }
};

export const obterLance = async (req: Request, res: Response) => {
  try {
    const lanceId = parseInt(req.params.id, 10);
    const lance = await lanceService.obterLance(lanceId);
    res.json(lance);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o lance' });
  }
};

export const atualizarLance = async (req: Request, res: Response) => {
  try {
    const lanceId = parseInt(req.params.id, 10);
    const dadosAtualizados: Lance = req.body;
    const lanceAtualizado = await lanceService.atualizarLance(lanceId, dadosAtualizados);

    if (lanceAtualizado) {
      const htmlLance = renderizarLance(lanceAtualizado);
      res.send(htmlLance);
    } else {
      res.status(404).json({ error: 'Lance não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o lance' });
  }
};

export const excluirLance = async (req: Request, res: Response) => {
  try {
    const lanceId = parseInt(req.params.id, 10);
    await lanceService.excluirLance(lanceId);
    res.json({ message: 'Lance excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o lance' });
  }
};