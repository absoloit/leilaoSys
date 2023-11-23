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