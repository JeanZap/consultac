import React from 'react';
import * as S from './styles';

interface HorarioProps {
  horario: string;
  selecionado: boolean;
  selecionarHorario: (horario: string) => void;
}

export function Horario({ horario, selecionado, selecionarHorario }: HorarioProps) {
  const selecionar = () => selecionarHorario(horario);
  return (
    <S.ContainerHorario $selecionado={selecionado} onPress={selecionar}>
      <S.TextoHorario $selecionado={selecionado}>{horario}</S.TextoHorario>
    </S.ContainerHorario>
  );
}
