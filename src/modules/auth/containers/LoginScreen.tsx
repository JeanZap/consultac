import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { MainRoutes } from '../../../navigation/routes/main.routes';
import { Login } from '../components/Login';

export const LoginScreen = () => {
  const [usuario, setUsuario] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [textoErro, setTextoErro] = useState<string>('');

  const navigation = useNavigation();

  const definirUsuario = (usuario: string) => setUsuario(usuario);

  const definirSenha = (senha: string) => setSenha(senha);

  const acessar = () => {
    setTextoErro('');
    const usuarioSenhaValidos = usuario && senha && senha.length > 8;
    const usuarioOuSenhaVazios = !usuario || !senha;
    const senhaCurta = senha.length <= 8;
    if (usuarioOuSenhaVazios) {
      setTextoErro('Preencha usuario e senha.');
    } else if (senhaCurta) {
      setTextoErro('A senha deve ter ao menos 8 digitos.');
    } else if (usuarioSenhaValidos) {
      navigation.navigate('main', { screen: MainRoutes.Principal });
    }
  };

  return (
    <Login
      usuario={usuario}
      senha={senha}
      textoErro={textoErro}
      definirUsuario={definirUsuario}
      definirSenha={definirSenha}
      acessar={acessar}
    />
  );
};
