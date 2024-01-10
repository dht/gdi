import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #111;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
`;

export const Actions = styled.div`
  height: 60px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  padding: 0 15px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Cta = styled(Button)`
  &.link {
    color: #9a9;
  }
`;

export const Gap = styled.div`
  flex: 1;
`;
