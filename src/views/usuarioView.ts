import { Usuario } from '../models/Usuario';

export const renderizarUsuario = (usuario: Usuario): string => {
  // Lógica para renderizar um usuário em HTML, por exemplo
  return `<div>${usuario.nome} - ${usuario.email}</div>`;
};