import styled, { css } from 'styled-components/native';

interface ConteudoCustomizadoProps {
  margem: string;
}

export const ConteudoCustomizado = styled.Text<ConteudoCustomizadoProps>`
  ${({ theme, margem }) => css`
    font-size: ${theme.fonte.metricas.conteudo};
    color: ${theme.fonte.cor.cinza1};
    margin: ${margem};
  `}
`;
