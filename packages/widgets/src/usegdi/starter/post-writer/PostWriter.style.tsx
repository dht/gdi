import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(50, 1fr);
`;

export const GridPanel = styled.div`
  background-color: #000;
  box-shadow: inset 0 0 10px 5px rgba(255, 255, 255, 0.1);
  display: flex;

  &.context {
    grid-column: 30 / 70;
    grid-row: 6 / 15;
  }

  &.body {
    grid-column: 30 / 70;
    grid-row: 16 / 30;
  }

  &.output1 {
    grid-column: 3 / 33;
    grid-row: 32 / 45;
  }

  &.output2 {
    grid-column: 35 / 65;
    grid-row: 32 / 45;
  }

  &.output3 {
    grid-column: 67 / 97;
    grid-row: 32 / 45;
  }

  &.tone {
    grid-column: 4 / 27;
    grid-row: 8 / 25;
  }

  &.views {
    grid-column: 73 / 96;
    grid-row: 8 / 25;
  }

  &.actions {
    grid-column: 73 / 96;
    grid-row: 26 / 30;
  }
`;
