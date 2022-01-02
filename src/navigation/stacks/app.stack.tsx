import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthStack } from './auth.stack';
import { MainStack } from './main.stack';

const AppNavigator = createStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator initialRouteName="auth">
        <AppNavigator.Screen
          component={AuthStack}
          name="auth"
          options={{ headerShown: false }}
        />
        <AppNavigator.Screen
          component={MainStack}
          name="main"
          options={{ headerShown: false }}
        />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
};
