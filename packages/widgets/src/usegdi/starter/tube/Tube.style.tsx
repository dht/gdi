import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  width: 1150px;
  margin: auto;
  position: relative;
`;

export const Gap = styled.div`
  flex: 1;
`;

export const Tip = styled.div`
  position: fixed;
  top: 30px;
  right: 50px;
`;

export const Actions = styled.div`
  position: absolute;
  left: 0;
  left: 0;
`;

export const Nav = styled(Button)``;
