import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Principal } from '../components/Principal';

export const PrincipalScreen = () => {
  const navigation = useNavigation();

  return <Principal />;
};
