import styled from 'styled-components/native';
import { Colors } from '../../../../../constants/colors';
import { Spacings } from '../../../../../constants/metrics';

export const ContainerScroll = styled.ScrollView`
  margin: ${Spacings.tinySpacing} 0 0 0;
`;

export const ContainerAgendamento = styled.TouchableHighlight`
  border: 1px solid ${Colors.gray4};
  padding: ${Spacings.standardSpacing};
  margin: 0 0 ${Spacings.tinySpacing} 0;
  border-radius: ${Spacings.standardSpacing};
`;
