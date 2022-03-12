import { ScrollView, Text } from 'react-native';
import { PesquisaProcedimentosDto } from '../../../models/dtos/Procedimentos/PesquisaProcedimentosDto';
import { ProcedimentoListadoDTO } from '../../../models/dtos/Procedimentos/ProcedimentoListadoDto';
import * as S from './styles';
import React from 'react';
import { CartaoMedico } from '../../../shared/components/CartaoMedico/CartaoMedico';

interface PrincipalProps {
  procedimentosListados: ProcedimentoListadoDTO;
}

export const Principal = ({
  procedimentosListados: {
    titulo,
    medico,
    clinicaMedica,
    endereco,
    preco,
    descontoPreco,
  },
}: PrincipalProps) => {
  return (
    <S.ContainerPrincipal>
      <ScrollView>
        <Text>{titulo}</Text>
        <Text>{clinicaMedica}</Text>
        <Text>{endereco}</Text>
        <Text>{preco}</Text>
        <Text>{descontoPreco}</Text>
        <CartaoMedico medico={medico} />
      </ScrollView>
    </S.ContainerPrincipal>
  );
};

{
  /*
          Ao clique:
            Marcar consulta (incluir uma agenda com horarios disponiveis), valores, 
            detalhes da clinica, detalhes do medico,
        */
}
