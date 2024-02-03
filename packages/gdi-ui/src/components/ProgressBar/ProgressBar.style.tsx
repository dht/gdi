import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  min-height: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
`;

export const Bar = styled.div`
  position: absolute;
  width: 0;
  height: 100%;
  background: linear-gradient(45deg, #ff69b4, #800080);
  background-size: 200% 100%;
  animation: progress-animation 3s ease-in-out infinite;

  @keyframes progress-animation {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;
