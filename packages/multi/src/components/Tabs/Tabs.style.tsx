import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  border-bottom: 1px solid #333;
  padding-left: 0px;

  &.bottom {
    border-top: 1px solid #333;
    border-bottom: none;
    align-items: flex-start;
  }
`;

export const Tab = styled.div`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #333;
  border-right-color: #333;
  user-select: none;
  cursor: pointer;
  position: relative;
  height: 18px;
  top: 1px;
  background-color: #000;
  box-shadow: inset 2rem 2rem 0 2rem rgba(0, 0, 0, 0.1);
  color: #ccc;
  border-radius: 5rem 5rem 0 0;

  &:last-child {
    border-right: 1px solid #333;
  }

  &.active {
    height: 19px;
    background-color: #1e1e2e;
    border-bottom: none;
    box-shadow: none;
    color: #ccc;
  }

  &:hover {
    background-color: #222;
  }

  &:active {
    background-color: #222;
  }

  &.bottom {
    top: -2px;
    border-radius: 0 0 5rem 5px;

    &.active {
      border-top: none;
      border-bottom: 1px solid gray;
    }
  }
`;
