import styled from 'styled-components';
import { Colors } from '../../../../constants/Colors';

interface ContainerProps {
  $secundario: boolean;
  $desativado: boolean;
}

export const ContainerBotao = styled.View<ContainerProps>`
  //TODO: secundario
  padding: 8px;
  margin: 16px 16px 0 16px;
  border-radius: 16px;
  border: 1px #b2b2b2 solid;
  background-color: #0000aa;
  ${({ $desativado }) => $desativado && `background-color: ${Colors.gray9};`}
`;
