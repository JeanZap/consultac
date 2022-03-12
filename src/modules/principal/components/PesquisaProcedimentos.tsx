import { Formik } from 'formik';
import { View } from 'react-native';
import { PesquisaProcedimentosDto } from '../../../models/dtos/Procedimentos/PesquisaProcedimentosDto';
import { CampoPesquisa } from '../../../shared/components/CampoPesquisa/CampoPesquisa';
import React from 'react';
import { Filtros } from './Filtros';
import { valoresIniciaisPesquisaProcedimentos } from '../../../shared/constants';
import { MenuColapsavel } from '../../../shared/components/MenuColapsavel/MenuColapsavel';

interface PesquisaProcedimentosProps {
  pesquisar: (valoresPesquisa: PesquisaProcedimentosDto) => void;
}

export const PesquisaProcedimentos = ({ pesquisar }: PesquisaProcedimentosProps) => {
  return (
    <Formik initialValues={valoresIniciaisPesquisaProcedimentos} onSubmit={pesquisar}>
      {(propriedadesFormik) => {
        console.log(JSON.stringify(propriedadesFormik.values, null, 2));

        const submeterFormulario = () => {
          propriedadesFormik.handleSubmit();
        };

        return (
          <View>
            <CampoPesquisa
              {...propriedadesFormik}
              nome="termoPesquisa"
              valor={propriedadesFormik.values.termoPesquisa}
              submeterFormulario={submeterFormulario}
            />
            <MenuColapsavel>
              <Filtros {...propriedadesFormik} />
            </MenuColapsavel>
          </View>
        );
      }}
    </Formik>
  );
};
