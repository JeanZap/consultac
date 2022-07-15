import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AgendarAtendimentoScreen } from '../../modules/agendamento/agendarAtendimento/containers/agendarAtendimentoScreen';
import { DetalhesProcedimentoScreen } from '../../modules/detalhesProcedimento/containers/DetalhesProcedimentoScreen';
import { PrincipalScreen } from '../../modules/principal/containers/PrincipalScreen';
import { MainRoutes } from '../routes/main.routes';

const { Navigator, Screen } = createStackNavigator();

export const MainStack = () => {
  return (
    <Navigator initialRouteName={MainRoutes.Principal}>
      <Screen
        component={PrincipalScreen}
        name={MainRoutes.Principal}
        options={{ headerShown: false }}
      />
      <Screen
        component={DetalhesProcedimentoScreen}
        name={MainRoutes.VisualizarProcedimento}
        options={{ headerShown: false }}
      />
      <Screen
        component={AgendarAtendimentoScreen}
        name={MainRoutes.AgendarAtendimento}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
