import { Leilao } from '../models/Leilao';

export const renderizarLeilao = (leilao: Leilao): string => {
  // Lógica para renderizar um leilão em HTML, por exemplo
  return `<div>${leilao.produto} - ${leilao.preco}</div>`;
};