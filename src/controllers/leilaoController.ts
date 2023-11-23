import { Request, Response } from 'express';
import { Leilao } from '../models/Leilao';
import { leilaoService } from '../services/leilaoService';

export const criarLeilao = async (req: Request, res: Response) => {
  try {
    const novoLeilao: Leilao = req.body;
    const leilao = await leilaoService.criarLeilao(novoLeilao);
    res.json(leilao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o leilão' });
  }
};