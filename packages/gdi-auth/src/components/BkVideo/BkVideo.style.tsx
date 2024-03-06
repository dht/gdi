import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  iframe {
    width: 100vw;
    height: 100vh;
    transform: translateX(-0vw);
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
