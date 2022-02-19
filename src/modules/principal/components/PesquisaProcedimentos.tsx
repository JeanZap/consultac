import { Formik } from 'formik';
import { View } from 'react-native';
import { PesquisaProcedimentosDto } from '../../../models/dtos/Procedimentos/PesquisaProcedimentosDto';
import { Botao } from '../../../shared/BotaoPrimario/BotaoPrimario';
import { CampoPesquisa } from '../../../shared/components/CampoPesquisa/CampoPesquisa';
import React from 'react';
import { Filtros } from './Filtros';
import { valoresIniciaisPesquisaProcedimentos } from '../../../shared/constants';

interface PesquisaProcedimentosProps {
  pesquisar: (valoresPesquisa: PesquisaProcedimentosDto) => void;
}

export const PesquisaProcedimentos = ({ pesquisar }: PesquisaProcedimentosProps) => {
  return (
    <Formik initialValues={valoresIniciaisPesquisaProcedimentos} onSubmit={pesquisar}>
      {(propriedadesFormik) => {
        console.log(JSON.stringify(propriedadesFormik.values, null, 2));
        return (
          <View>
            <CampoPesquisa
              {...propriedadesFormik}
              nome="termoPesquisa"
              valor={propriedadesFormik.values.termoPesquisa}
            />
            <Filtros {...propriedadesFormik} />
            <Botao
              label="Submit"
              acessar={() => {
                propriedadesFormik.handleSubmit();
              }}
            />
          </View>
        );
      }}
    </Formik>
  );
};
