import { Text } from 'react-native';
import styled from 'styled-components';
import { Colors } from '../../../../constants/Colors';
import { Spacings } from '../../../../constants/Metrics';

export const Container = styled.View`
  border: 1px solid ${Colors.gray4};
  padding: ${Spacings.standardSpacing};
  margin: 0 0 ${Spacings.tinySpacing} 0;
  border-radius: ${Spacings.standardSpacing};
`;

export const Title = styled.Text`
  font-size: ${Spacings.largeSpacing};
  font-weight: 700;
  color: ${Colors.gray};
`;

export const Clinic = styled.Text`
  font-size: ${Spacings.standardSpacing};
  color: ${Colors.gray};
  margin: 0 0 ${Spacings.standardSpacing} 0;
`;

export const NomeMedico = styled.Text`
  font-size: ${Spacings.standardSpacing};
  color: ${Colors.gray};
`;

export const Specialization = styled.Text`
  font-size: ${Spacings.standardSpacing};
  color: ${Colors.gray2};
`;
