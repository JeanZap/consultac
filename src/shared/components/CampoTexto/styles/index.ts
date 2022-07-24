import { Text, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../../../constants/colors';

export const Input = styled(TextInput)`
  padding: 16px;
  margin: 0 16px 0 16px;
  border-radius: 8px;
  border: 1px #b2b2b2 solid;
  font-size: 16px;
  color: #444444;
  background-color: ${Colors.white};
`;

export const Texto = styled(Text)`
  margin: 16px 16px 4px 16px;
  font-size: 16px;
  color: #444444;
`;
