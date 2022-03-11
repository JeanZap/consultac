import { ScrollView } from 'react-native';
import { PesquisaProcedimentosDto } from '../../../models/dtos/Procedimentos/PesquisaProcedimentosDto';
import { ProcedimentoListadoDTO } from '../../../models/dtos/Procedimentos/ProcedimentoListadoDto';
import { PesquisaProcedimentos } from './PesquisaProcedimentos';
import { ProcedimentoListado } from './ProcedimentoListado';
import * as S from './styles';
import React from 'react';

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

        {/*
          Ao clique:
            Marcar consulta (incluir uma agenda com horarios disponiveis), valores, 
            detalhes da clinica, detalhes do medico,
        */}