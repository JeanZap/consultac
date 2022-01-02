import React from 'react';
import { View } from 'react-native';
import * as S from './styles';

interface CampoTextoProps {
  label?: string;
  valor: string;
  definirValor: (valor: string) => void;
}

export const CampoTexto = ({ label, valor, definirValor }: CampoTextoProps) => {
  const exibirLabel = label;

  return (
    <View>
      {exibirLabel && <S.Texto>{label}</S.Texto>}
      <S.Input value={valor} onChangeText={definirValor} />
    </View>
  );
};
