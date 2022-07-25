export const mascaraReal = (valor: number) => {
  return valor.toString().replace(/([0-9]{2})$/g, ',$1');
};

export function calcularDesconto(preco: number, descontoPreco: number) {
  return preco * ((100 - descontoPreco) / 100);
}
