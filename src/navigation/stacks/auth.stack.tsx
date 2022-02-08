import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AutenticacaoScreen } from '../../modules/auth/containers/AutenticacaoScreen';
import { PrincipalScreen } from '../../modules/principal/containers/PrincipalScreen';
import { AuthRoutes } from '../routes/auth.routes';
import { MainRoutes } from '../routes/main.routes';

const AuthNavigator = createStackNavigator();

export const AuthStack = () => {
  return (
    <AuthNavigator.Navigator initialRouteName={AuthRoutes.Login}>
      <AuthNavigator.Screen
        component={AutenticacaoScreen}
        name={AuthRoutes.Login}
        options={{ headerShown: false }}
      />
      <AuthNavigator.Screen
        component={PrincipalScreen}
        name={MainRoutes.Principal}
        options={{ headerShown: false }}
      />
    </AuthNavigator.Navigator>
  );
};
