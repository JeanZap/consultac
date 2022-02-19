import React from 'react';
import { IntervaloNumerico } from '../../../models/dtos/IntervaloNumerico';
import { ProcedimentoListadoDTO } from '../../../models/dtos/Procedimentos/ProcedimentoListadoDto';
import * as S from './styles/listedProcedure.style';

interface ProcedimentoListadoProps {
  procedimento: ProcedimentoListadoDTO;
}

export const ProcedimentoListado = ({
  procedimento: {
    titulo,
    medico,
    especializacao,
    crm,
    ufCrm,
    clinicaMedica,
    preco,
    descontoPreco,
  },
}: ProcedimentoListadoProps) => {
  return (
    <S.Container>
      <S.Title>{titulo}</S.Title>
      <S.Clinic>{clinicaMedica}</S.Clinic>
      <S.MedicName>{medico}</S.MedicName>
      <S.MedicName>
        R${preco} {descontoPreco && `- ${descontoPreco}% de desconto`}
      </S.MedicName>
      <S.Specialization>
        {especializacao} {crm}-{ufCrm}
      </S.Specialization>
    </S.Container>
  );
};
