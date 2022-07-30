import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthStack } from './auth.stack';
import { MainStack } from './main.stack';

const { Navigator, Screen } = createStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="main">
        <Screen component={AuthStack} name="auth" options={{ headerShown: false }} />
        <Screen component={MainStack} name="main" options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
};
