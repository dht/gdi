import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #000;
  font-size: 20px;
  color: #aba;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 60px 1fr;

  @media (max-width: 800px) {
    grid-template-columns: 70px 1fr;
  }
`;

export const Left = styled.div`
  background-color: rgba(235, 255, 235, 0.03);
  grid-area: 1 / 1 / 4 / 2;
`;

export const Top = styled.div`
  background-color: rgba(235, 255, 235, 0.06);
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid rgba(235, 255, 235, 0.1);
`;

export const Editor = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  padding: 10px;
  background-color: #111;
`;

export const ElementFamily = styled.div`
  color: #9b9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(235, 255, 235, 0.1);
  cursor: pointer;

  @media (max-width: 800px) {
    padding: 5px 0;
  }

  .icon {
    font-size: 30px;
    margin-bottom: 10px;

    @media (max-width: 800px) {
      font-size: 20px;
    }
  }

  &:hover {
    background-color: rgba(235, 255, 235, 0.05);
  }

  &.selected {
    background-color: rgba(235, 255, 235, 0.1);
  }
`;

export const Title = styled.div`
  font-size: 18px;

  @media (max-width: 800px) {
    font-size: 13px;
  }
`;
