import { View } from 'react-native';
import styled from 'styled-components';

interface ContainerProps {
  $secundario: boolean;
}

export const ContainerBotao = styled(View)<ContainerProps>`
  padding: 8px;
  margin: 16px 16px 0 16px;
  border-radius: 16px;
  border: 1px #b2b2b2 solid;
  background-color: #0000aa;
`;
