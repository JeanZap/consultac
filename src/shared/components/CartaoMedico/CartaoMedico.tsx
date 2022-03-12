import { Text, View } from 'react-native';
import React from 'react';
import { IMedico } from '../../../models/dtos/Procedimentos/ProcedimentoListadoDto';
import * as S from './styles';

interface CartaoMedicoProps {
  medico: IMedico;
}

export const CartaoMedico = ({
  medico: { nome, especializacao, crm, ufCrm },
}: CartaoMedicoProps) => {
  return (
    <S.Container>
      <S.NomeMedico>{nome}</S.NomeMedico>
      <S.ContainerIdentificacao>
        <S.CampoIdentificacao>{especializacao}</S.CampoIdentificacao>
        <S.CampoIdentificacao>{crm}</S.CampoIdentificacao>
        <S.CampoIdentificacao>{ufCrm}</S.CampoIdentificacao>
      </S.ContainerIdentificacao>
    </S.Container>
  );
};
