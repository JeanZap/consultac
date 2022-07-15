import React, { ReactNode } from 'react';
import * as S from './styles';

interface SubtituloProps {
  margem?: string;
  children: ReactNode;
}

export function Subtitulo({ margem = '0 0 8px 0', children }: SubtituloProps) {
  return <S.SubtituloCustomizado margem={margem}>{children}</S.SubtituloCustomizado>;
}
