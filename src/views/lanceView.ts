import { Lance } from '../models/Lance';

export const renderizarLance = (lance: Lance): string => {
  // Lógica para renderizar um lance em HTML, por exemplo
  return `<div>${lance.valor} - ${lance.comprador.nome}</div>`;
};