import { PrismaClient } from '@prisma/client';
import { Lance } from '../models/Lance';

const prisma = new PrismaClient();

export const lanceService = {
  criarLance: async (novoLance: Lance): Promise<Lance> => {
    return prisma.lance.create({ data: novoLance });
  },
  listarLances: async (): Promise<Lance[]> => {
    return prisma.lance.findMany();
  },
  obterLance: async (lanceId: number): Promise<Lance | null> => {
    return prisma.lance.findUnique({ where: { id: lanceId } });
  },
  atualizarLance: async (lanceId: number, dadosAtualizados: Lance): Promise<Lance | null> => {
    return prisma.lance.update({ where: { id: lanceId }, data: dadosAtualizados });
  },
  excluirLance: async (lanceId: number): Promise<void> => {
    return prisma.lance.delete({ where: { id: lanceId } });
  },
};