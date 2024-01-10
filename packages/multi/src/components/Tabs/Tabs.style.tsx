import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  border-bottom: 1px solid gray;
  padding-left: 0rem;

  &.bottom {
    border-top: 1px solid gray;
    border-bottom: none;
    align-items: flex-start;
  }
`;

export const Tab = styled.div`
  padding: 10rem;
  font-size: 16rem;
  border: 1px solid gray;
  border-right-color: #999;
  user-select: none;
  cursor: pointer;
  position: relative;
  height: 15rem;
  top: 1rem;
  background-color: white;
  box-shadow: inset 2rem 2rem 0 2rem rgba(0, 0, 0, 0.1);
  color: #99a;
  border-radius: 5rem 5rem 0 0;

  &:last-child {
    border-right: 1px solid gray;
  }

  &.active {
    height: 19rem;
    background-color: #fff;
    border-bottom: none;
    box-shadow: none;
    color: #334;
  }

  &:hover {
    background-color: #f3c3e0;
  }

  &:active {
    background-color: #eeb5d8;
  }

  &.bottom {
    top: -2rem;
    border-radius: 0 0 5rem 5rem;

    &.active {
      border-top: none;
      border-bottom: 1px solid gray;
    }
  }
`;
