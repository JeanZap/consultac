import React from 'react';
import { PROCEDIMENTO_LISTADO_MOCK } from '../../../constants/mocks';
import { Principal } from '../components/DetalhesProcedimento';

export const DetalhesProcedimentoScreen = () => {
  return <Principal procedimentosListados={PROCEDIMENTO_LISTADO_MOCK} />;
};
