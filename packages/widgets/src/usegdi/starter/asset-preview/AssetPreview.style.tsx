import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #223;
  display: flex;
  position: relative;
`;

export const Close = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  color: #aab;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  background-color: #223;
  padding: 5px;

  &:hover {
    color: gold;
  }

  &:active {
    top: 14px;
    right: 14px;
  }
`;
