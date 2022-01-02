import React from 'react';
import { Button } from 'react-native';
import * as S from './styles';

interface BotaoProps {
  label: string;
  secundario?: boolean;
  acessar: () => void;
}

export const Botao = ({ label, secundario, acessar }: BotaoProps) => {
  return (
    <S.ContainerBotao $secundario={secundario}>
      <Button onPress={acessar} title={label} color="#fff" />
    </S.ContainerBotao>
  );
};
