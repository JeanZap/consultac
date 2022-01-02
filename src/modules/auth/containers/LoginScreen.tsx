import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { MainRoutes } from '../../../navigation/routes/main.routes';
import { Login } from '../components/Login';

export const LoginScreen = () => {
  const [usuario, setUsuario] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const navigation = useNavigation();

  const definirUsuario = (usuario: string) => setUsuario(usuario);

  const definirSenha = (senha: string) => setSenha(senha);

  const acessar = () => {
    navigation.navigate('main', { screen: MainRoutes.Principal });
  };

  return (
    <Login
      usuario={usuario}
      senha={senha}
      definirUsuario={definirUsuario}
      definirSenha={definirSenha}
      acessar={acessar}
    />
  );
};
