import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AutenticacaoScreen } from '../../modules/auth/containers/AutenticacaoScreen';
import { AuthRoutes } from '../routes/auth.routes';

const { Navigator, Screen } = createStackNavigator();

export const AuthStack = () => {
  return (
    <Navigator initialRouteName={AuthRoutes.Login}>
      <Screen
        component={AutenticacaoScreen}
        name={AuthRoutes.Login}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
