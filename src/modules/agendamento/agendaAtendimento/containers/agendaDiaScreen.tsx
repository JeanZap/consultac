import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { DateData } from 'react-native-calendars/src/types';
import { MainRoutes } from '../../../../navigation/routes/main.routes';
import { AgendarDia } from '../components/agendaDia';

export function AgendarDiaScreen() {
  const navigation = useNavigation();

  const [diaSelecionado, setDiaSelecionado] = useState<string>('');

  const proximoDesabilitado = !diaSelecionado;

  const definirDiaSelecionado = ({ dateString }: DateData): void =>
    setDiaSelecionado(dateString);

  const seguirParaProxima = (): void =>
    navigation.navigate('main', { screen: MainRoutes.AgendarHora });

  return (
    <AgendarDia
      diaSelecionado={diaSelecionado}
      proximoDesabilitado={proximoDesabilitado}
      minimoDiaPermitido={new Date().toDateString()}
      definirDiaSelecionado={definirDiaSelecionado}
      seguirParaProxima={seguirParaProxima}
    />
  );
}
