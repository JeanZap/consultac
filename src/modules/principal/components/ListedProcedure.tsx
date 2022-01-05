import React from 'react';
import * as S from './styles/listedProcedure.style';

interface ListedProcedureProps {
  title: string;
  medic: string;
  specialization: string;
  crm: string;
  ufCrm: string;
  medicalClinic: string;
  price: number;
  priceOff: number;
}

export const ListedProcedure = ({
  title,
  medic,
  specialization,
  crm,
  ufCrm,
  medicalClinic,
  price,
  priceOff,
}: ListedProcedureProps) => {
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
