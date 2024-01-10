import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: 5rem;
  display: inline-block;
  width: 20rem;
  height: 20rem;
  line-height: 20rem;
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
