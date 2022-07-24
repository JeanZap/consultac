import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const ContainerSafeArea = styled(SafeAreaView)`
  padding: 0 ${({ theme }) => theme.paddings.horizontalSafeAreaView};
`;
