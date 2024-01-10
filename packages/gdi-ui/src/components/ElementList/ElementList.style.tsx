import { Icon } from '../Icon/Icon';
import styled from 'styled-components';
import color from 'tinycolor2';

const base = color('rgb(85, 125, 85)');

export const Wrapper = styled.div`
  flex: 1;
  background-color: #000;
  font-size: 20px;
  color: #aba;
  display: flex;
`;

export const Items = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  height: 30px;

  &.hidden {
    opacity: 0.5;
  }

  &:nth-child(odd) {
    background-color: rgba(235, 255, 235, 0.06);
  }

  &:hover {
    background-color: rgba(235, 255, 235, 0.1);
  }
`;

export const Text = styled.div`
  font-size: 20px;
  padding-left: 15px;
`;

export const Text1 = styled.div`
  width: 200px;
  font-size: 15px;
  font-weight: bold;
`;

export const Text2 = styled.div`
  width: 200px;
  font-size: 15px;
  opacity: 0.5;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;

  > span {
    margin-left: 10px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Action = styled(Icon)`
  &.visible {
  }
`;

export const Empty = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #676;
  margin-bottom: 150px;
`;

export const EmptyMessage = styled.div`
  font-size: 100;
  margin-top: 20px;
`;
