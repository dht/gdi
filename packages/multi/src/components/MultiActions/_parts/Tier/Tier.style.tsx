import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Item = styled.button`
  background-color: #000;
  color: #667;
  border: 1px solid #000;
  margin: 1px;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: #fff;
  }

  &.selected {
    background-color: #333;
    color: gold;
  }
`;
