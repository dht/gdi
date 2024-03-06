import styled from 'styled-components';

export const Wrapper = styled.span`
  width: 30px;
  text-align: center;
  display: inline-block;
  user-select: none;

  svg {
    width: 100%;
    height: 100%;
  }

  &.clickable {
    cursor: pointer;

    &:hover {
      color: palevioletred;
    }

    &:active {
      position: relative;
      top: 1rem;
      right: 1rem;
    }
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.1;
  }

  &.btn {
    background-color: #112;
    padding: 2px 3px;
    border-radius: 10px;
    margin-left: 5px;

    &:hover {
      background-color: #001;
    }
  }

  &.off {
    opacity: 0.3;
  }
`;
