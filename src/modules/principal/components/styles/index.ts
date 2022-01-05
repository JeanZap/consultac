import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';
import { Spacings } from '../../../../constants/Metrics';

export const ContainerPrincipal = styled(SafeAreaView)`
  padding: 0 ${Spacings.standardSpacing};
`;
