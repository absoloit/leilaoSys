import { PrismaClient } from '@prisma/client';
import { Usuario } from '../models/Usuario';

const prisma = new PrismaClient();

export const usuarioService = {
  criarUsuario: async (novoUsuario: Usuario): Promise<Usuario> => {
    return prisma.usuario.create({ data: novoUsuario });
  },
  listarUsuarios: async (): Promise<Usuario[]> => {
    return prisma.usuario.findMany();
  },
  obterUsuario: async (usuarioId: number): Promise<Usuario | null> => {
    return prisma.usuario.findUnique({ where: { id: usuarioId } });
  },
  atualizarUsuario: async (usuarioId: number, dadosAtualizados: Usuario): Promise<Usuario | null> => {
    return prisma.usuario.update({ where: { id: usuarioId }, data: dadosAtualizados });
  },
  excluirUsuario: async (usuarioId: number): Promise<void> => {
    return prisma.usuario.delete({ where: { id: usuarioId } });
  },
};