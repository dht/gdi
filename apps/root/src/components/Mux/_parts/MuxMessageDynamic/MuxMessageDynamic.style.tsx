import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  padding-left: 40px;
  font-size: 16px;
  line-height: 28px;
`;

export const Line = styled.div`
  display: inline-block;
`;

export const Dot = styled.div`
  width: 16px;
  height: 16px;
  background-color: white;
  margin-left: 4px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  top: 2px;
  animation: pulsating;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;

  @keyframes pulsating {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;
