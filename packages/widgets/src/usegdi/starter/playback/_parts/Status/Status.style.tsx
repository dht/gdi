import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #334;
  margin-top: 2rem;
  font-family: monospace;
  position: relative;
`;

export const Inner = styled.div<{ width: number; length: number }>`
  overflow: hidden;
  width: ${(props) => props.width + 'px'};
  position: relative;
  height: 43rem;

  @keyframes scroll {
    from {
      transform: translateX(${(props) => props.width + 'px'});
    }
    to {
      transform: translateX(${(props) => -props.width - props.length * 7 + 'px'});
    }
  }
`;

export const Content = styled.div`
  color: #999;
  font-size: 20rem;
  text-align: center;
  padding: 10rem 0;
  position: absolute;
  flex: 1;
  white-space: nowrap;
  animation-duration: 15s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
`;
