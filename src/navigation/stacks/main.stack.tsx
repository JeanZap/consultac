import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AgendarDiaScreen } from '../../modules/agendamento/agendarAtendimento/containers/agendarDiaScreen';
import { AgendarHoraScreen } from '../../modules/agendamento/agendarAtendimento/containers/agendarHoraScreen';
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
        component={AgendarDiaScreen}
        name={MainRoutes.AgendarDia}
        options={{ headerShown: false }}
      />
      <Screen
        component={AgendarHoraScreen}
        name={MainRoutes.AgendarHora}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
