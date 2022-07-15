import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { PesquisaProcedimentosDto } from '../../../models/dtos/Procedimentos/PesquisaProcedimentosDto';
import { CampoPesquisa } from '../../../shared/components/CampoPesquisa/CampoPesquisa';
import { MenuColapsavel } from '../../../shared/components/MenuColapsavel/MenuColapsavel';
import { valoresIniciaisPesquisaProcedimentos } from '../../../constants/constants';
import { Filtros } from './Filtros';

interface PesquisaProcedimentosProps {
  pesquisar: (valoresPesquisa: PesquisaProcedimentosDto) => void;
}

export const PesquisaProcedimentos = ({ pesquisar }: PesquisaProcedimentosProps) => {
  return (
    <Formik initialValues={valoresIniciaisPesquisaProcedimentos} onSubmit={pesquisar}>
      {(propriedadesFormik) => {
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
