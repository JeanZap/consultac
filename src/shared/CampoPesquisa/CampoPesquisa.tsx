import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as S from './styles';

interface CampoPesquisaProps {}

export const CampoPesquisa = ({}: CampoPesquisaProps) => {
  return (
    <S.Container>
      <S.CampoTexto />
      <TouchableHighlight onPress={() => console.log('asdfadsf')}>
        <View>
          <Icon name="account-plus-outline" size={24} color={'#000000'} />
        </View>
      </TouchableHighlight>
    </S.Container>
  );
};
