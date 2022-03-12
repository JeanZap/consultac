import { View } from 'react-native';
import styled from 'styled-components';
import { Colors } from '../../../../constants/Colors';
import { Spacings } from '../../../../constants/Metrics';

interface MenuProps {
  $aberto: boolean;
}

export const Menu = styled(View)<MenuProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${Spacings.standardSpacing};
  border: 1px solid ${Colors.gray4};
  border-radius: ${Spacings.tinySpacing};
  ${({ $aberto }) =>
    $aberto
      ? `border-bottom-left-radius: 0; border-bottom-right-radius: 0;`
      : `margin-bottom: ${Spacings.tinySpacing}`}
`;

export const MenuColapsavel = styled(View)<MenuProps>`
  padding: ${Spacings.standardSpacing};
  border-radius: ${Spacings.tinySpacing};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  ${({ $aberto }) => !$aberto && `display: none;`}
  border: 1px solid ${Colors.gray4};
  border-top: 0;
  height: ${({ $aberto }) => ($aberto ? 'auto' : '0px')};
  margin-bottom: ${Spacings.tinySpacing};
`;
