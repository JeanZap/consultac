import { FormikProps } from 'formik';
import { TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MensagemErro } from '../../components/MensagemErro/MensagemErro';
import * as S from './styles';
import React from 'react';
import { PesquisaProcedimentosDto } from '../../../models/dtos/Procedimentos/PesquisaProcedimentosDto';
import { Colors } from '../../../constants/Colors';

interface CampoPesquisaProps extends FormikProps<PesquisaProcedimentosDto> {
  nome: string;
  valor: string;
  submeterFormulario: () => void;
}

export const CampoPesquisa = ({
  nome,
  valor,
  submeterFormulario,
  setFieldValue,
}: CampoPesquisaProps) => {
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
        <TouchableHighlight onPress={submeterFormulario}>
          <Icon name="magnify" size={24} color={Colors.gray} />
        </TouchableHighlight>
      </S.Container>
      <MensagemErro nome={nome} />
    </>
  );
};
