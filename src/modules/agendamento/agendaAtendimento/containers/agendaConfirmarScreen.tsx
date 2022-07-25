import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { AGENDAMENTO_MOCK, PROCEDIMENTO_LISTADO_MOCK } from '../../../../constants/mocks';
import { MainRoutes } from '../../../../navigation/routes/main.routes';
import { AgendaConfirmar } from '../components/agendaConfirmar';

export function AgendaConfirmarScreen() {
  const navigation = useNavigation();

  const confirmar = (): void =>
    navigation.reset({
      index: 0,
      routes: [{ name: MainRoutes.AtendimentosAgendados }],
    });

  return (
    <AgendaConfirmar
      procedimento={PROCEDIMENTO_LISTADO_MOCK}
      agendamento={AGENDAMENTO_MOCK}
      confirmar={confirmar}
    />
  );
}
