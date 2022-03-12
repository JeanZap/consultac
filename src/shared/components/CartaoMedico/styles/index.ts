import styled from 'styled-components';
import { Colors } from '../../../../constants/Colors';
import { Metrics, Spacings } from '../../../../constants/Metrics';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding: ${Spacings.tinySpacing};
  border: 1px solid ${Colors.gray4};
  border-radius: ${Spacings.tinySpacing};
`;

export const ContainerIdentificacao = styled.View`
  display: flex;
  flex-direction: row;
`;

export const NomeMedico = styled.Text`
  font-size: ${Spacings.standardSpacing};
  font-weight: 500;
  color: ${Colors.gray};
`;

export const CampoIdentificacao = styled.Text`
  font-size: ${Metrics.standardSpacing - 2}px;
  font-weight: 400;
  color: ${Colors.gray};
  margin-right: ${Spacings.smallSpacing};
`;
