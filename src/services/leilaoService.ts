import { PrismaClient } from '@prisma/client';
import { Leilao } from '../models/Leilao';

const prisma = new PrismaClient();

export const leilaoService = {
  criarLeilao: async (novoLeilao: Leilao): Promise<Leilao> => {
    return prisma.leilao.create({ data: novoLeilao });
  },
  listarLeiloes: async (): Promise<Leilao[]> => {
    return prisma.leilao.findMany();
  },
  obterLeilao: async (leilaoId: number): Promise<Leilao | null> => {
    return prisma.leilao.findUnique({ where: { id: leilaoId } });
  },
  atualizarLeilao: async (leilaoId: number, dadosAtualizados: Leilao): Promise<Leilao | null> => {
    return prisma.leilao.update({ where: { id: leilaoId }, data: dadosAtualizados });
  },
  excluirLeilao: async (leilaoId: number): Promise<void> => {
    return prisma.leilao.delete({ where: { id: leilaoId } });
  },
};