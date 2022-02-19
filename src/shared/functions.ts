export const mascaraReal = (valor: number) => {
  return valor.toString().replace(/([0-9]{2})$/g, ',$1');
};
