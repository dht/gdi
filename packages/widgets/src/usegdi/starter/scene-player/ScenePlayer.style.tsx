import styled from 'styled-components';
import { Colors } from '../bit-builder/BitBuilder.colors';

export const Wrapper = styled(Colors)`
  flex: 1;
  background-color: #000;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #fff;
  color: palevioletred;
`;

export const Canvas = styled.div`
  flex: 1;
  display: flex;
`;

export const Audio = styled.div`
  * {
    &::-webkit-scrollbar {
      height: 0;
    }
  }

  @media (max-width: 800px) {
    zoom: 0.5;
  }
`;

export const Timeline = styled.div`
  height: 70px;

  &.bits {
    height: 30px;
  }
`;

export const Panel = styled.div`
  height: 80px;
  position: relative;

  @media (max-width: 800px) {
    height: 40px;
  }
`;

export const Loading = styled.div`
  height: 125px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Fps = styled.div`
  position: absolute;
  background-color: black;
  text-align: center;
  font-size: 16rem;
  color: #dfd;
  bottom: 135px;
  padding: 3rem 10rem;
  left: 10rem;
  border-radius: 10rem;
  z-index: 999;
  opacity: 0.4;
  box-shadow: inset 0 0 1px 1px rgba(255, 255, 255, 0.2);
`;

export const CtaPanel = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 400px;
  background-color: #111;
  perspective: 1000px;
  transform-style: preserve-3d;
  transform: perspective(1000px) rotateY(-10deg);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2), -8px -8px 0 rgba(0, 0, 0, 0.2);
`;
