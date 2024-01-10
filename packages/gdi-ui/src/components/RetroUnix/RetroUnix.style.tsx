import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  color: green;
  color: limegreen;
  font-family: 'Courier New', monospace;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: black;
`;

export const ScreenDoor = styled.div`
  content: '';
  background: repeating-linear-gradient(
    90deg,
    #00ff00 0px,
    #00ff00 2px,
    transparent 2px,
    transparent 4px
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px 16px;
  overflow: hidden;
`;

export const P = styled.p`
  padding: 0;
  margin: -20px 0 10px;

  br {
  }
`;

export const Cursor = styled.span`
  width: 8px;
  height: 16px;
  background-color: limegreen;
  animation: blink 1s infinite;
  display: inline-block;
  margin-left: 1px;
  position: relative;
  top: 3px;

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
