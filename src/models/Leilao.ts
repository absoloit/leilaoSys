import { Prisma } from '@prisma/client';

export interface Leilao {
  id?: number;
  nome: string;
  descricao: string;
}