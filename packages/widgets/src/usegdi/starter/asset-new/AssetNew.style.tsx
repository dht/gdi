import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Drop = styled.div`
  flex: 3;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #bbc;
  cursor: pointer;
  transition: all 150ms ease-in-out;

  &:hover {
    border: 2px solid #dde;
    background-color: white;
  }

  &.active {
    background-color: #fffae8;
    border: 2px dashed #ababab;
    color: #99a;
  }
`;

export const Actions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Cta = styled(Button)``;

export const P = styled.p`
  font-size: 22px;
  font-weight: 100;
  padding: 0;
  margin: 0;
`;

export const Tags = styled.div``;
