import styled from 'styled-components';
import { Button } from '@gdi/ui';

export const Cta = styled(Button)``;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    margin-left: 10px;

    &:first-child {
      margin-left: 0;
    }
  }
`;
