import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 255px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  @media (max-width: 800px) {
    bottom: 80px;
  }
`;
