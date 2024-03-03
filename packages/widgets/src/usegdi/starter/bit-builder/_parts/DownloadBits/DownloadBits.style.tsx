import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: absolute;
  left: 15px;
  bottom: 375px;
  z-index: 4;
  background-color: rgba(235, 255, 235, 0.1);
  border-radius: 5px;
  padding: 5px;
  color: #676;

  @media (max-width: 800px) {
    display: none;
  }
`;
