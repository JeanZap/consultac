import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { Colors } from '../../../../constants/colors';
import { Spacings } from '../../../../constants/metrics';

interface ContainerPrecoProps {
  $adicionarMargemDireita?: boolean;
}

const { width } = Dimensions.get('window');

export const ContainerPrincipal = styled(SafeAreaView)`
  padding: 0 ${Spacings.standardSpacing};
`;

export const ContainerCampos = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ContainerPreco = styled.View<ContainerPrecoProps>`
  border-radius: ${Spacings.tinySpacing};
  border: 1px solid ${Colors.gray4};
  padding: ${Spacings.tinySpacing} ${Spacings.standardSpacing};
  width: ${(width - 72) / 2}px;
  ${({ $adicionarMargemDireita }) => $adicionarMargemDireita && 'margin-right: 8px;'}
  margin-top: ${Spacings.tinySpacing};
`;
