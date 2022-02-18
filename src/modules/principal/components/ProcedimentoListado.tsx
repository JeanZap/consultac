import React from 'react';
import * as S from './styles/listedProcedure.style';

interface ProcedimentoListadoProps {
  titulo: string;
  medico: string;
  especializacao: string;
  crm: string;
  ufCrm: string;
  clinicaMedica: string;
  preco: number;
  descontoPreco: number;
}

export const ProcedimentoListado = ({
  titulo: title,
  medico: medic,
  especializacao: specialization,
  crm,
  ufCrm,
  clinicaMedica: medicalClinic,
  preco: price,
  descontoPreco: priceOff,
}: ProcedimentoListadoProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Clinic>{medicalClinic}</S.Clinic>
      <S.MedicName>{medic}</S.MedicName>
      <S.MedicName>
        R${price} {priceOff && `- ${priceOff}% de desconto`}
      </S.MedicName>
      <S.Specialization>
        {specialization} {crm}-{ufCrm}
      </S.Specialization>
    </S.Container>
  );
};
