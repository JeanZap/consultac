import React from 'react';
import { Button } from 'react-native';
import * as S from './styles';

interface BotaoProps {
  label: string;
  corLabel?: string;
  margem?: string;
  cor?: string;
  desativado?: boolean;
  acessar: () => void;
}

export const Botao = ({
  label,
  corLabel = '#ffffff',
  margem = '0',
  cor = '#0000aa',
  desativado = false,
  acessar,
}: BotaoProps) => {
  return (
    <S.ContainerBotao margem={margem} cor={cor} $desativado={desativado}>
      <Button onPress={acessar} title={label} color={corLabel} disabled={desativado} />
    </S.ContainerBotao>
  );
};
