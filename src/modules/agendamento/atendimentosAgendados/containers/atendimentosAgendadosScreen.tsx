import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { PROCEDIMENTOS_AGENDADOS } from '../../../../constants/mocks';
import { MainRoutes } from '../../../../navigation/routes/main.routes';
import { AtendimentosAgendados } from '../components/atendimentosAgendados';

export function AtendimentosAgendadosScreen() {
  const navigation = useNavigation();

  function irParaProcedimento(id: string) {
    navigation.navigate('main', {
      screen: MainRoutes.Agendamento,
      params: { id },
    });
  }

  return (
    <AtendimentosAgendados
      agendamentos={PROCEDIMENTOS_AGENDADOS}
      irParaProcedimento={irParaProcedimento}
    />
  );
}
