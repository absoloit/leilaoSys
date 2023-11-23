import { Prisma } from '@prisma/client';

export interface Lance {
  id?: number;
  valor: number;
  usuarioId: number;
  leilaoId: number;
}