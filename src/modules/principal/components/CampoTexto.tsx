import { TextInput } from 'react-native-gesture-handler';
import * as S from './styles';
import { MensagemErro } from '../../../shared/MensagemErro/MensagemErro';
import React from 'react';

interface CampoTextoProps {
  valor: string;
  nome: string;
  placeHolder: string;
  tipoTeclado?: 'numeric';
  definirValor: (nome: string) => (evento: any) => void;
}

export const CampoTexto = ({
  valor,
  nome,
  placeHolder,
  tipoTeclado = undefined,
  definirValor,
}: CampoTextoProps) => {
  return (
    <S.ContainerPreco $adicionarMargemDireita>
      <TextInput
        keyboardType={tipoTeclado}
        value={valor}
        onChange={definirValor(nome)}
        placeholder={placeHolder}
      />
      <MensagemErro nome={nome} />
    </S.ContainerPreco>
  );
};
