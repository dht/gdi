import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Action = styled.div`
  font-size: 22px;
  width: 34px;
  margin: 0 2px;
  border-radius: 4px;
  height: 34px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: default;
  color: #aab;

  &:hover {
    color: gold;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    bottom: 2px;
    left: 2px;
    position: relative;
  }
`;
