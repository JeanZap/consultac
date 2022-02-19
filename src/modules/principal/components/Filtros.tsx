import { FormikProps } from 'formik';
import { Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { PesquisaProcedimentosDto } from '../../../models/dtos/Procedimentos/PesquisaProcedimentosDto';
import { especialidadesMedicas as ESPECIALIDADES_MEDICAS } from '../../../shared/constants';
import { mascaraReal } from '../../../shared/functions';
import * as S from './styles';
import React from 'react';

interface FiltrosProps extends FormikProps<PesquisaProcedimentosDto> {}

export const Filtros = ({
  values: {
    precos: { minimo, maximo },
    avaliacao,
  },
  setFieldValue,
}: FiltrosProps) => {
  const precoMinimo = minimo && mascaraReal(minimo);
  const precoMaximo = maximo && mascaraReal(maximo);
  const avaliacaoTratada = avaliacao && mascaraReal(avaliacao);

  const definirValorCampo = (nome: string) => (evento: any) => {
    const valor = evento.nativeEvent.text;
    setFieldValue(nome, valor);
  };

  const definirPreco = (nome: string) => (evento: any) => {
    const valor = evento.nativeEvent.text.replace(/[^0-9]/g, '');
    setFieldValue(nome, valor);
  };

  return (
    <>
      {ESPECIALIDADES_MEDICAS.map(({ label }) => {
        return <Text>{label}</Text>;
      })}
      <Text>cidade</Text>
      <Text>estado</Text>
      <S.ContainerPrecos>
        <S.ContainerPreco $adicionarMargemDireita>
          <TextInput
            keyboardType="numeric"
            value={precoMinimo}
            onChange={definirPreco('precos.minimo')}
            placeholder="Preco mínimo"
          />
        </S.ContainerPreco>
        <S.ContainerPreco>
          <TextInput
            keyboardType="numeric"
            value={precoMaximo}
            onChange={definirPreco('precos.maximo')}
            placeholder="Preco máximo"
          />
        </S.ContainerPreco>
      </S.ContainerPrecos>
      <S.ContainerPreco>
        <TextInput
          value={avaliacaoTratada}
          onChange={definirValorCampo('rating')}
          placeholder="Avaliação"
        />
      </S.ContainerPreco>
    </>
  );
};
