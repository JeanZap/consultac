import { Image, Text } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../../../constants/colors';
import { Spacings } from '../../../../constants/metrics';

export const Logo = styled(Image)`
  width: 100%;
  height: 160px;
  align-self: center;
  resize-mode: contain;
`;

export const Erro = styled(Text)`
  width: 100%;
  margin: ${Spacings.standardSpacing} 0 0 ${Spacings.standardSpacing};
  color: ${Colors.red};
  font-size: ${Spacings.standardSpacing};
`;
