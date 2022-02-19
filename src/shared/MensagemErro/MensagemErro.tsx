import { ErrorMessage } from 'formik';
import React from 'react';
import * as S from './styles';

interface MensagemErroProps {
  nome: string;
}

export const MensagemErro = ({ nome }: MensagemErroProps) => {
  return (
    <ErrorMessage name={nome}>
      {(msg) => msg && <S.MensageErro>{msg}</S.MensageErro>}
    </ErrorMessage>
  );
};
