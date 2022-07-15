import { Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../../constants/colors';

interface MenuColpsavelProps {
  children: JSX.Element;
}

export const MenuColapsavel = ({ children }: MenuColpsavelProps) => {
  const [aberto, setAberto] = useState<boolean>(false);

  const nomeIcone = aberto ? 'chevron-up' : 'chevron-down';

  const alternarMenu = () => {
    setAberto(!aberto);
    console.log(aberto);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={alternarMenu}>
        <S.Menu $aberto={aberto}>
          <Text>Menu</Text>
          <Icon name={nomeIcone} size={24} color={Colors.gray} />
        </S.Menu>
      </TouchableWithoutFeedback>
      <S.MenuColapsavel $aberto={aberto}>{children}</S.MenuColapsavel>
    </>
  );
};
