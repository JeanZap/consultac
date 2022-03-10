import { Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import * as S from './styles';

interface MenuColpsavelProps {
  children: JSX.Element;
}

export const MenuColapsavel = ({ children }: MenuColpsavelProps) => {
  const [aberto, setAberto] = useState<boolean>(false);

  const alternarMenu = () => {
    setAberto(!aberto);
    console.log(aberto);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={alternarMenu}>
        <S.Menu $aberto={aberto}>
          <Text>Menu</Text>
          <Text>Icone</Text>
        </S.Menu>
      </TouchableWithoutFeedback>
      <S.MenuColapsavel $aberto={aberto}>{children}</S.MenuColapsavel>
    </>
  );
};
