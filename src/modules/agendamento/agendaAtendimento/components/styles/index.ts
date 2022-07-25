import styled, { css } from 'styled-components/native';
import { Colors } from '../../../../../constants/colors';

interface HorarioProps {
  $selecionado: boolean;
}

export const ContainerCalendario = styled.View`
  margin-top: 16px;
  margin-bottom: ${({ theme }) => theme.margens.margemInferior};
`;

export const ContainerHorarios = styled.View`
  margin-top: 16px;
  margin-bottom: ${({ theme }) => theme.margens.margemInferior};
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContainerHorario = styled.TouchableHighlight<HorarioProps>`
  border-radius: 8px;
  margin: 8px;
  padding: 8px;

  ${({ $selecionado }) =>
    $selecionado
      ? css`
          border: 1px solid ${Colors.blue};
          background-color: ${Colors.blue};
        `
      : css`
          border: 1px solid ${Colors.gray1};
        `}
`;

export const TextoHorario = styled.Text<HorarioProps>`
  ${({ theme }) => css`
    font-size: ${theme.fonte.metricas.conteudo}px;
    color: ${theme.fonte.cor.cinza1};
  `}
  ${({ $selecionado }) =>
    $selecionado &&
    css`
      color: ${Colors.white};
    `}
`;
