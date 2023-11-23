import { Prisma } from '@prisma/client';

export interface Usuario {
  id?: number;
  nome: string;
  email: string;
}