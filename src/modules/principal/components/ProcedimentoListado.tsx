import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { ProcedimentoListadoDTO } from '../../../models/dtos/Procedimentos/ProcedimentoListadoDto';
import { MainRoutes } from '../../../navigation/routes/main.routes';
import * as S from './styles/listedProcedure.style';

interface ProcedimentoListadoProps {
  procedimento: ProcedimentoListadoDTO;
}

export const ProcedimentoListado = ({
  procedimento: {
    titulo,
    medico: { nome, especializacao, crm, ufCrm },
    clinicaMedica,
    preco,
    descontoPreco,
  },
}: ProcedimentoListadoProps) => {
  const navigation = useNavigation();

  const exibirDetalhesProcedimento = () =>
    navigation.navigate('main', { screen: MainRoutes.VisualizarProcedimento });

  return (
    <TouchableWithoutFeedback onPress={exibirDetalhesProcedimento}>
      <S.Container>
        <S.Title>{titulo}</S.Title>
        <S.Clinic>{clinicaMedica}</S.Clinic>
        <S.NomeMedico>{nome}</S.NomeMedico>
        <S.NomeMedico>
          R${preco} {descontoPreco && `- ${descontoPreco}% de desconto`}
        </S.NomeMedico>
        <S.Specialization>
          {especializacao} {crm}-{ufCrm}
        </S.Specialization>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};
