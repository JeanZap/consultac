import React from 'react';
import { PROCEDIMENTOS_LISTADOS_MOCK } from '../../../constants/mocks';
import { PesquisaProcedimentosDto } from '../../../models/dtos/Procedimentos/PesquisaProcedimentosDto';
import { Principal } from '../components/Principal';

export const PrincipalScreen = () => {
  function pesquisar(valoresPesquisa: PesquisaProcedimentosDto) {}

  return (
    <Principal
      procedimentosListados={PROCEDIMENTOS_LISTADOS_MOCK}
      pesquisar={pesquisar}
    />
  );
};
