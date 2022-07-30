import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AgendaConfirmarScreen } from '../../modules/agendamento/agendaAtendimento/containers/agendaConfirmarScreen';
import { AgendarDiaScreen } from '../../modules/agendamento/agendaAtendimento/containers/agendaDiaScreen';
import { AgendarHoraScreen } from '../../modules/agendamento/agendaAtendimento/containers/agendaHoraScreen';
import { AgendamentoScreen } from '../../modules/agendamento/agendamento/containers/agendamentoScreen';
import { AtendimentosAgendadosScreen } from '../../modules/agendamento/atendimentosAgendados/containers/atendimentosAgendadosScreen';
import { DetalhesProcedimentoScreen } from '../../modules/detalhesProcedimento/containers/DetalhesProcedimentoScreen';
import { PrincipalScreen } from '../../modules/principal/containers/PrincipalScreen';
import { MainRoutes } from '../routes/main.routes';

const { Navigator, Screen } = createStackNavigator();

export const MainStack = () => {
  return (
    <Navigator initialRouteName={MainRoutes.Inicio}>
      <Screen
        component={PrincipalScreen}
        name={MainRoutes.Inicio}
        options={{ headerShown: false }}
      />
      <Screen
        component={DetalhesProcedimentoScreen}
        name={MainRoutes.VisualizarProcedimento}
        options={{ headerShown: false }}
      />
      <Screen
        component={AgendarDiaScreen}
        name={MainRoutes.AgendarDia}
        options={{ headerShown: false }}
      />
      <Screen
        component={AgendarHoraScreen}
        name={MainRoutes.AgendarHora}
        options={{ headerShown: false }}
      />
      <Screen
        component={AgendaConfirmarScreen}
        name={MainRoutes.ConfirmarAgendamento}
        options={{ headerShown: false }}
      />
      <Screen
        component={AtendimentosAgendadosScreen}
        name={MainRoutes.AtendimentosAgendados}
        options={{ headerShown: false }}
      />
      <Screen
        component={AgendamentoScreen}
        name={MainRoutes.Agendamento}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
