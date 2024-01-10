import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  width: 10rem;
  height: 10rem;
  line-height: 10rem;
  text-align: center;
  animation: spin 800ms linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
