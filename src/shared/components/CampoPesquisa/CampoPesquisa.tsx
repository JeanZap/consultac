import { FormikProps } from 'formik';
import { TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MensagemErro } from '../../MensagemErro/MensagemErro';
import * as S from './styles';
import React from 'react';
import { PesquisaProcedimentosDto } from '../../../models/dtos/Procedimentos/PesquisaProcedimentosDto';

interface CampoPesquisaProps extends FormikProps<PesquisaProcedimentosDto> {
  nome: string;
  valor: string;
}

export const CampoPesquisa = ({ nome, valor, setFieldValue }: CampoPesquisaProps) => {
  //TODO: tipar corretamente
  const definirTermoPesquisa = (evento: any) => {
    const valor = evento.nativeEvent.text;
    setFieldValue(nome, valor);
  };

  return (
    <>
      <S.Container>
        <S.CampoTexto
          returnKeyType="search"
          value={valor}
          onChange={definirTermoPesquisa}
          placeholder="Pesquisar..."
        />
        <TouchableHighlight>
          <View>
            <Icon name="account-plus-outline" size={24} color={'#000000'} />
          </View>
        </TouchableHighlight>
      </S.Container>
      <MensagemErro nome={nome} />
    </>
  );
};
