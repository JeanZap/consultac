import { Formik, FormikValues } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import { CampoPesquisa } from '../../../shared/CampoPesquisa/CampoPesquisa';
import { ProcedimentoListado } from './ProcedimentoListado';
import * as S from './styles';

//TODO: Mover dto
export interface ProcedimentoListadoDTO {
  titulo: string;
  medico: string;
  especializacao: string;
  crm: string;
  ufCrm: string;
  clinicaMedica: string;
  endereco: string;
  preco: number;
  descontoPreco: number;
}
//TODO: Mover para diretorio adequado e nomear corretamente
const initialValues = {
  termoPesquisa: '',
};

export interface intervaloNumerico {
  minimo: number;
  maximo: number;
}

interface PrincipalProps {
  procedimentosListados: ProcedimentoListadoDTO[];
  pesquisar: (values: FormikValues) => void;
}

export const Principal = ({ procedimentosListados, pesquisar }: PrincipalProps) => {
  return (
    <S.ContainerPrincipal>
      <Formik initialValues={initialValues} onSubmit={pesquisar}>
        {(propriedadesFormik) => {
          return (
            <View>
              <CampoPesquisa
                {...propriedadesFormik}
                nome="termoPesquisa"
                valor={propriedadesFormik.values.termoPesquisa}
              />
              <Text>Filtro</Text>
              {/* Pesquisar por: especilidade, local, rating, preco */}
              <Text>Filtro</Text>
            </View>
          );
        }}
      </Formik>
      <View>
        {procedimentosListados.map(
          (
            {
              titulo,
              medico,
              especializacao,
              crm,
              ufCrm,
              clinicaMedica,
              preco,
              descontoPreco,
            },
            indice,
          ) => (
            <ProcedimentoListado
              key={indice}
              titulo={titulo}
              medico={medico}
              especializacao={especializacao}
              crm={crm}
              ufCrm={ufCrm}
              clinicaMedica={clinicaMedica}
              preco={preco}
              descontoPreco={descontoPreco}
            />
          ),
        )}
        {/*
            Ao clique:
            Marcar consulta (incluir uma agenda com horarios disponiveis), valores, 
            detalhes da clinica, detalhes do medico,*/}
      </View>
    </S.ContainerPrincipal>
  );
};
