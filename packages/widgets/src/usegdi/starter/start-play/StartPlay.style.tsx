import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: transparent;
  padding: 30rem;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  color: #ccc;
  background-color: #444;

  .Icon-wrapper {
    font-size: 50rem;
    width: 50rem;
  }

  &:hover {
    color: gold;
  }

  &:active {
    bottom: 2px;
    left: 2px;
  }
`;
