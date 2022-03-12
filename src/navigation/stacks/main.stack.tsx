import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { DetalhesProcedimentoScreen } from '../../modules/detalhesProcedimento/containers/DetalhesProcedimentoScreen';
import { PrincipalScreen } from '../../modules/principal/containers/PrincipalScreen';
import { MainRoutes } from '../routes/main.routes';

const MainNavigator = createStackNavigator();

export const MainStack = () => {
  return (
    <MainNavigator.Navigator initialRouteName={MainRoutes.Principal}>
      <MainNavigator.Screen
        component={PrincipalScreen}
        name={MainRoutes.Principal}
        options={{ headerShown: false }}
      />
      <MainNavigator.Screen
        component={DetalhesProcedimentoScreen}
        name={MainRoutes.DetalhesProcedimento}
        options={{ headerShown: false }}
      />
    </MainNavigator.Navigator>
  );
};
