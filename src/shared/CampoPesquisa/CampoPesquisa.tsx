import React, { useState } from 'react';
import { TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as S from './styles';
import { Field, FormikProps } from 'formik';

//TODO: Tipar corretamente
interface CampoPesquisaProps extends FormikProps<any> {
  nome: string;
  valor: string;
}

export const CampoPesquisa = (props: CampoPesquisaProps) => {
  console.log(JSON.stringify(props, null, 2));

  const definirTermoPesquisa = (evento: any) => {
    const valor = evento.nativeEvent.text;
    props.setFieldValue(props.nome, valor);
  };

  return (
    <S.Container>
      <S.CampoTexto
        returnKeyType="search"
        value={props.valor}
        onChange={definirTermoPesquisa}
        placeholder="Pesquisar..."
      />
      <TouchableHighlight>
        <View>
          <Icon name="account-plus-outline" size={24} color={'#000000'} />
        </View>
      </TouchableHighlight>
    </S.Container>
  );
};
