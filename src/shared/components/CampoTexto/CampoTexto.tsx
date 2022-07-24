import { View } from 'react-native';
import * as S from './styles';
import React from 'react';

interface CampoTextoProps {
  label?: string;
  valor: string;
  tipo?: 'senha';
  definirValor: (valor: string) => void;
}

export const CampoTexto = ({ label, valor, tipo, definirValor }: CampoTextoProps) => {
  const exibirLabel = label;
  const tipoSenha = tipo === 'senha';

  return (
    <>
      {exibirLabel && <S.Texto>{label}</S.Texto>}
      <S.Input secureTextEntry={tipoSenha} value={valor} onChangeText={definirValor} />
    </>
  );
};
