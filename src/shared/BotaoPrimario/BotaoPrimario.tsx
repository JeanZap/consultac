import React from 'react';
import { Button } from 'react-native';
import * as S from './styles';

interface BotaoProps {
  label: string;
  secundario?: boolean;
  desativado?: boolean;
  acessar: () => void;
}

export const Botao = ({ label, secundario, desativado, acessar }: BotaoProps) => {
  return (
    <S.ContainerBotao $secundario={secundario} $desativado={desativado}>
      <Button onPress={acessar} title={label} color="#fff" disabled={desativado} />
    </S.ContainerBotao>
  );
};
