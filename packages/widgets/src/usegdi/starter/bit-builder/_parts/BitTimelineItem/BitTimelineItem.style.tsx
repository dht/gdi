import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3px;
  box-sizing: border-box;
  height: 30px;

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
    pointer-events: none;
  }

  &.selected {
    &&:after {
      background-color: var(--green-300);
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
  z-index: 999;
  margin: 2px;

  &:hover {
    background-color: var(--green-800);
  }
`;
