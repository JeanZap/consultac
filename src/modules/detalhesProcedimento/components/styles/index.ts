import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { Spacings } from '../../../../constants/metrics';

export const ContainerPrincipal = styled(SafeAreaView)`
  padding: 0 ${Spacings.standardSpacing};
`;
