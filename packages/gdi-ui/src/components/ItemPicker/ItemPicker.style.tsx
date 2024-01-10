import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 17px;
  flex: 1;
  display: flex;
  background-color: #000;
  width: 700px;
  display: flex;
  flex-direction: row;

  &.narrow {
    width: 350px;
  }
`;

export const Items = styled.div`
  flex: 1;
  height: 550px;
  overflow-y: auto;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  color: #aba;

  &:nth-child(odd) {
    background-color: rgba(235, 255, 235, 0.06);
  }

  &:hover {
    background-color: rgba(235, 255, 235, 0.1);
  }
`;

export const Field = styled.div`
  flex: 1;
`;

export const Preview = styled.div`
  width: 300px;
  display: flex;
  flex: 1;
`;

export const Name = styled.div`
  max-width: 350px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Size = styled.div`
  font-size: 13px;
  opacity: 0.5;
`;

export const Actions = styled.div``;

export const Cta = styled(Button)`
  zoom: 0.9;
`;
