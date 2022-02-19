import { View } from 'react-native';
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
      <PesquisaProcedimentos pesquisar={pesquisar} />
      <View>
        {procedimentosListados.map((procedimento, indice) => (
          <ProcedimentoListado key={indice} procedimento={procedimento} />
        ))}
        {/*
            Ao clique:
            Marcar consulta (incluir uma agenda com horarios disponiveis), valores, 
            detalhes da clinica, detalhes do medico,*/}
      </View>
    </S.ContainerPrincipal>
  );
};
