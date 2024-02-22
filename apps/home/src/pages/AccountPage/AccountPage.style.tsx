import styled from 'styled-components';
import { Button } from '@gdi/ui';

export const DeleteKeys = styled.a`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: darkred;
  }
`;
