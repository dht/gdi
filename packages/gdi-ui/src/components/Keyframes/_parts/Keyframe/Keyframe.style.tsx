import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0 3px;
  width: 20px;
  height: 30px;
  box-sizing: border-box;

  &::after {
    content: '';
    background-color: var(--green-200);
    border: 1px solid var(--green-900);
    border-radius: 3px;
    position: absolute;
    left: 2px;
    right: 2px;
    top: 6px;
    bottom: 6px;
  }

  &.selected {
    &&:after {
      background-color: var(--green-300);
      border: 1px solid yellowgreen;
    }
  }

  &:last-child {
  }

  &:hover {
  }
`;

export const Handler = styled.div`
  width: 10px;
  height: 10px;
  background-color: var(--green-900);
  border-radius: 3px;
  cursor: pointer;
  z-index: 4;
  margin: 2px;

  &:hover {
    background-color: var(--green-800);
  }
`;
