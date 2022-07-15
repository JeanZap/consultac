import styled from 'styled-components/native';
import { Colors } from '../../../../constants/colors';

interface ContainerProps {
  margem: string;
  cor: string;
  $desativado: boolean;
}

export const ContainerBotao = styled.View<ContainerProps>`
  padding: 8px;
  border-radius: 8px;
  border: 1px #b2b2b2 solid;
  ${({ cor }) => cor && `background-color: ${cor};`}
  ${({ $desativado }) => $desativado && `background-color: ${Colors.gray9};`}
  margin: ${({ margem }) => margem};
`;
