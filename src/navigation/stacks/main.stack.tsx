import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { DashboardScreen } from '../../modules/dashboard/containers/DashboardScreen';
import { MainRoutes } from '../routes/main.routes';

const MainNavigator = createStackNavigator();

export const MainStack = () => {
  return (
    <MainNavigator.Navigator initialRouteName={MainRoutes.Dashboard}>
      <MainNavigator.Screen
        component={DashboardScreen}
        name={MainRoutes.Dashboard}
        options={{ headerShown: false }}
      />
    </MainNavigator.Navigator>
  );
};
