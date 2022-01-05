import React from 'react';
import { SafeAreaView } from 'react-native';
import { Images } from '../../../assets/images';
import { Botao } from '../../../shared/BotaoPrimario/BotaoPrimario';
import { CampoTexto } from '../../../shared/CampoTexto/CampoTexto';
import * as S from './styles';

interface LoginProps {
  usuario: string;
  senha: string;
  textoErro: string;
  definirUsuario: (usuario: string) => void;
  definirSenha: (senha: string) => void;
  acessar: () => void;
}

export const Login = ({
  usuario,
  senha,
  textoErro,
  definirUsuario,
  definirSenha,
  acessar,
}: LoginProps) => {
  const exibirTextoErro = !!textoErro;
  return (
    <SafeAreaView>
      <S.Logo source={Images.logo} />
      <CampoTexto label="Usuario" valor={usuario} definirValor={definirUsuario} />
      <CampoTexto label="Senha" valor={senha} definirValor={definirSenha} />
      {exibirTextoErro && <S.Erro>{textoErro}</S.Erro>}
      <Botao acessar={acessar} label="Acessar" />
    </SafeAreaView>
  );
};
