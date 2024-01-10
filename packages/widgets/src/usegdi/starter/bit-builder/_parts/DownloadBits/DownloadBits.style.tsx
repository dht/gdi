import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: fixed;
  left: 10px;
  bottom: 350px;
  z-index: 99;
  left: 10px;
  background-color: rgba(235, 255, 235, 0.1);
  border-radius: 5px;
  padding: 5px;
  color: #676;

  @media (max-width: 800px) {
    display: none;
  }
`;
