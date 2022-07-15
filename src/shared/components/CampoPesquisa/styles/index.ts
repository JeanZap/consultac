import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../../../constants/colors';
import { Spacings } from '../../../../constants/metrics';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: ${Spacings.tinySpacing};
  border: 1px solid ${Colors.gray4};
  padding: ${Spacings.tinySpacing} ${Spacings.standardSpacing};
  margin-bottom: ${Spacings.tinySpacing};
`;

export const CampoTexto = styled(TextInput)`
  width: 90%;
`;
