import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: fixed;
  top: 0;
  bottom: 35px;
  background-color: black;
  z-index: 9999;
  display: flex;
  width: 1703px;
  max-width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: inset 0 -2px 2px 5px rgba(255, 255, 255, 0.1);
`;

export const X = styled.div`
  position: absolute;
  z-index: 9999;
  top: 10px;
  right: 10px;
  opacity: 0.2;

  &:hover {
    opacity: 1;
  }
`;
