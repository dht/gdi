import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #000;
  height: 40px;
  box-shadow: inset 0 4px 10px var(--green-200s);
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px 10px 0 0;
  padding: 0 6px;
  color: var(--green-900s);

  &.hasDot {
    color: gold;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: var(--green-900s);
  border: none;
  border-radius: 10px;
  cursor: pointer;

  span {
    pointer-events: none;
  }

  .Icon-wrapper {
    position: relative;
    top: 2px;
  }

  &:hover {
    color: var(--green-900);
    background-color: rgba(225, 255, 225, 0.1);
  }

  &:active {
    position: relative;
    top: 1px;
    left: 1px;
  }
`;
