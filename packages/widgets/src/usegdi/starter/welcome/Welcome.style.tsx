import styled from 'styled-components';

export const Wrapper = styled.div`
flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeOut ease-out 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: 8.5s;
  font-family: 'Share Tech Mono', monospace;

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const P = styled.p`
  padding: 0;
  margin: 0;
  font-size: 30px;
  line-height: 50px;
  opacity: 0;
  animation: fadeIn ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  position: relative;
  bottom: 3px;

  &:nth-child(2) {
    animation-delay: 2.5s;
  }

  &:nth-child(3) {
    animation-delay: 5.5s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
