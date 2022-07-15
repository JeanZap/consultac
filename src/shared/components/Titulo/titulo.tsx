import React, { ReactNode } from 'react';
import * as S from './styles';

interface TituloProps {
  margem?: string;
  children: ReactNode;
}

export function Titulo({ margem = '0 0 16px 0', children }: TituloProps) {
  return <S.TituloCustomizado margem={margem}>{children}</S.TituloCustomizado>;
}
