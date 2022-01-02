import React from 'react';
import { SafeAreaView } from 'react-native';
import { Images } from '../../../assets/images';
import { Botao } from '../../../shared/BotaoPrimario/BotaoPrimario';
import { CampoTexto } from '../../../shared/CampoTexto/CampoTexto';
import * as S from './styles';

interface LoginProps {
  usuario: string;
  senha: string;
  definirUsuario: (usuario: string) => void;
  definirSenha: (senha: string) => void;
  acessar: () => void;
}

export const Login = ({
  usuario,
  senha,
  definirUsuario,
  definirSenha,
  acessar,
}: LoginProps) => {
  return (
    <SafeAreaView>
      <S.Logo source={Images.logo} />
      <CampoTexto label="Usuario" valor={usuario} definirValor={definirUsuario} />
      <CampoTexto label="Senha" valor={senha} definirValor={definirSenha} />
      <Botao acessar={acessar} label="Acessar" />
    </SafeAreaView>
  );
};
