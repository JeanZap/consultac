import React, { useState } from 'react';
import { DateData } from 'react-native-calendars/src/types';
import { AgendarDia } from '../components/agendarDia';

export function AgendarDiaScreen() {
  const [diaSelecionado, setDiaSelecionado] = useState<string>('');

  const definirDiaSelecionado = ({ dateString }: DateData) =>
    setDiaSelecionado(dateString);

  return (
    <AgendarDia
      diaSelecionado={diaSelecionado}
      definirDiaSelecionado={definirDiaSelecionado}
    />
  );
}
