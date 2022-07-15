import React from 'react';
import { ScrollView } from 'react-native';
import { PesquisaProcedimentosDto } from '../../../models/dtos/Procedimentos/PesquisaProcedimentosDto';
import { ProcedimentoListadoDTO } from '../../../models/dtos/Procedimentos/ProcedimentoListadoDto';
import { PesquisaProcedimentos } from './PesquisaProcedimentos';
import { ProcedimentoListado } from './ProcedimentoListado';
import * as S from './styles';

interface PrincipalProps {
  procedimentosListados: ProcedimentoListadoDTO[];
  pesquisar: (valoresPesquisa: PesquisaProcedimentosDto) => void;
}

export const Principal = ({ procedimentosListados, pesquisar }: PrincipalProps) => {
  return (
    <S.ContainerPrincipal>
      <ScrollView>
        <PesquisaProcedimentos pesquisar={pesquisar} />
        {procedimentosListados.map((procedimento, indice) => (
          <ProcedimentoListado key={indice} procedimento={procedimento} />
        ))}
      </ScrollView>
    </S.ContainerPrincipal>
  );
};
