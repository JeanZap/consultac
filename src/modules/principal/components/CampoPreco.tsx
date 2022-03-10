import React from 'react';
import { CampoTexto } from './CampoTexto';

interface CampoPrecoProps {
  valor: string;
  nome: string;
  placeHolder: string;
  definirPreco: (nome: string) => (evento: any) => void;
}

export const CampoPreco = ({
  valor,
  nome,
  placeHolder,
  definirPreco,
}: CampoPrecoProps) => {
  return (
    <CampoTexto
      valor={valor}
      nome={nome}
      placeHolder={placeHolder}
      tipoTeclado={'numeric'}
      definirValor={definirPreco}
    />
  );
};
