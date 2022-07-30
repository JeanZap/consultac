import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  PROCEDIMENTO_AGENDADO
} from '../../../../constants/mocks';
import { MainRoutes } from '../../../../navigation/routes/main.routes';
import { AgendaConfirmar } from '../components/agendaConfirmar';

export function AgendaConfirmarScreen() {
  const navigation = useNavigation();

  const confirmar = (): void =>
    navigation.reset({
      index: 0,
      routes: [{ name: MainRoutes.AtendimentosAgendados }],
    });

  return <AgendaConfirmar agendamento={PROCEDIMENTO_AGENDADO} confirmar={confirmar} />;
}
