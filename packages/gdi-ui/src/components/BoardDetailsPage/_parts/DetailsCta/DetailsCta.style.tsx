import styled from 'styled-components';
import { Button } from '@gdi/ui';

export const Wrapper = styled.div`
  flex: 1;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  border-radius: 24px;
  border: 1px solid rgb(221, 221, 221);
  padding: 24px;
`;

export const Cta = styled(Button)`
  width: 100%;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  &.gold {
    background-color: #ffcc00;
    color: #000;
    border: 1px solid goldenrod;

    &:hover {
      background-color: #f5c300;
    }
  }
`;

export const Version = styled.div`
  color: #aab;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
