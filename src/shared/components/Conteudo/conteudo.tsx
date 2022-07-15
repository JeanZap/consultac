import React, { ReactNode } from 'react';
import * as S from './styles';

interface ConteudoProps {
  margem?: string;
  children: ReactNode;
}

export function Conteudo({ margem = '0 0 4px 0', children }: ConteudoProps) {
  return <S.ConteudoCustomizado margem={margem}>{children}</S.ConteudoCustomizado>;
}
