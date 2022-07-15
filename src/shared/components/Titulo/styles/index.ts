import styled, { css } from 'styled-components/native';

interface TituloProps {
  margem: string;
}

export const TituloCustomizado = styled.Text<TituloProps>`
  ${({ theme, margem }) => css`
    font-size: ${theme.fonte.metricas.titulo};
    font-weight: ${theme.fonte.pesos.titulo};
    color: ${theme.fonte.cor.cinza1};
    margin: ${margem};
  `}
`;
