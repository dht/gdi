import styled from 'styled-components';

export const Wrapper = styled.button`
  font-size: 18rem;
  border: 2px solid var(--color-border);
  background-color: var(--color-button);
  color: var(--color-text);
  padding: 10px 20px;
  border-radius: 20px;
  opacity: 0.9;
  cursor: pointer;
  border: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    // darker
    opacity: 1;
  }

  &.outlined {
    background-color: transparent;
    border: 2px solid #222;
    color: #222;

    &:hover {
      background-color: #f7f7f7;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.primary {
    background-color: #222;
    color: var(--color-text);
  }

  &.secondary {
    color: #222;
    background-color: white;
  }

  &.inverse {
    background-color: white;
    color: #222;
    border: 2px solid #222;

    &:hover {
      background-color: #f7f7f7;
    }
  }

  &.command {
    background-color: white;
    color: #333;
    border-radius: 0;
    padding: 8px 15px;
    box-shadow: inset 0 0 0 1px #ddd;

    &:hover {
      background-color: #f7f7f7;
    }

    &:active {
      background-color: #eee;
    }
  }

  &.link {
    background: none;
    border: none;
    color: #1a1a1a;
    font-size: 16rem;
    margin: 0;
    cursor: pointer;
    text-decoration: underline;
  }

  .icon {
    left: 0;
    height: 0;
    position: relative;
    top: -12px;
    width: 20px;
    left: -7px;
    font-size: 23px;
  }
`;
