import styled from 'styled-components';

export const Wrapper = styled.button`
  border: none;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  border-radius: 20%;
  background-color: #232;
  color: #fff;
  box-shadow: inset -3px -3px 10px 2px rgba(0, 0, 0, 0.1);
  border: 3px solid #343;
  cursor: pointer;

  @media (max-width: 800px) {
    padding: 10px;
  }

  &:hover {
    background-color: #343;
    border-color: #454;
  }

  &:active {
    background-color: #454;
    border-color: #565;
    transform: translate(-50%, -50%) scale(0.95);
  }
`;
