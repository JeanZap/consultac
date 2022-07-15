import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { PROCEDIMENTO_LISTADO_MOCK } from '../../../constants/mocks';
import { MainRoutes } from '../../../navigation/routes/main.routes';
import { DetalhesProcedimento } from '../components/DetalhesProcedimento';

export const DetalhesProcedimentoScreen = () => {
  const navigation = useNavigation();

  function iniciarAgendamento() {
    navigation.navigate('main', { screen: MainRoutes.AgendarAtendimento });
  }

  return (
    <DetalhesProcedimento
      procedimento={PROCEDIMENTO_LISTADO_MOCK}
      iniciarAgendamento={iniciarAgendamento}
    />
  );
};
