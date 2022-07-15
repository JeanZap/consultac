import { Picker } from '@react-native-community/picker';
import { ItemValue } from '@react-native-community/picker/typings/Picker';
import { FormikProps } from 'formik';
import React from 'react';
import { Text } from 'react-native';
import { PesquisaProcedimentosDto } from '../../../models/dtos/Procedimentos/PesquisaProcedimentosDto';
import { CIDADES, ESPECIALIDADES_MEDICAS, ESTADOS } from '../../../constants/constants';
import { mascaraReal } from '../../../shared/functions';
import { CampoPreco } from './CampoPreco';
import { CampoTexto } from './CampoTexto';
import * as S from './styles';

interface FiltrosProps extends FormikProps<PesquisaProcedimentosDto> {}

export const Filtros = ({
  values: {
    precos: { minimo: minimoPreco, maximo: maximoPreco },
    avaliacao: { minimo: minimoAvaliacao, maximo: maximoAvaliacao },
    especialidade,
    estado,
    cidade,
  },
  setFieldValue,
}: FiltrosProps) => {
  const precoMinimo = minimoPreco ? mascaraReal(minimoPreco) : '';
  const precoMaximo = maximoPreco ? mascaraReal(maximoPreco) : '';
  const avaliacaoMinimo = minimoAvaliacao ? mascaraReal(minimoAvaliacao) : '';
  const avaliacaoMaximo = maximoAvaliacao ? mascaraReal(maximoAvaliacao) : '';

  const definirValorCampo = (nome: string) => (evento: any) => {
    const valor = evento.nativeEvent.text;
    setFieldValue(nome, valor);
  };

  const definirPreco = (nome: string) => (evento: any) => {
    const valor = evento.nativeEvent.text.replace(/[^0-9]/g, '');
    setFieldValue(nome, valor);
  };

  function definirEspecialidade(especialidade: ItemValue) {
    setFieldValue('especialidade', especialidade);
  }

  function definirEstado(estado: ItemValue) {
    setFieldValue('estado', estado);
  }

  function definirCidade(cidade: ItemValue) {
    setFieldValue('cidade', cidade);
  }

  return (
    <>
      <Text>Especialidade</Text>
      <Picker
        mode="dropdown"
        selectedValue={especialidade}
        onValueChange={definirEspecialidade}>
        {ESPECIALIDADES_MEDICAS.map(({ label }) => (
          <Picker.Item key={label} label={label} value={label} />
        ))}
      </Picker>

      <Text>Estado</Text>
      <Picker mode="dropdown" selectedValue={estado} onValueChange={definirEstado}>
        {ESTADOS.map(({ label }) => (
          <Picker.Item key={label} label={label} value={label} />
        ))}
      </Picker>

      <Text>Cidade</Text>
      <Picker mode="dropdown" selectedValue={cidade} onValueChange={definirCidade}>
        {CIDADES.map(({ label }) => (
          <Picker.Item key={label} label={label} value={label} />
        ))}
      </Picker>
      <S.ContainerCampos>
        <CampoTexto
          valor={avaliacaoMinimo}
          nome={'avaliacao.minimo'}
          placeHolder={'Avaliação mínima'}
          definirValor={definirValorCampo}
        />
        <CampoTexto
          valor={avaliacaoMaximo}
          nome={'avaliacao.maximo'}
          placeHolder={'Avaliação máximo'}
          definirValor={definirValorCampo}
        />
      </S.ContainerCampos>
      <S.ContainerCampos>
        <CampoPreco
          valor={precoMinimo}
          nome={'precos.minimo'}
          definirPreco={definirPreco}
          placeHolder={'Preço mínimo'}
        />
        <CampoPreco
          valor={precoMaximo}
          nome={'precos.maximo'}
          definirPreco={definirPreco}
          placeHolder={'Preço máximo'}
        />
      </S.ContainerCampos>
    </>
  );
};
