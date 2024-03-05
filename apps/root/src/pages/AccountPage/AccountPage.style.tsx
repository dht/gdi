import styled from 'styled-components';
import { Button } from '@gdi/ui';

export const Wrapper = styled.div`
  padding: 30px 60px;
`;

export const H1 = styled.h1``;

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
