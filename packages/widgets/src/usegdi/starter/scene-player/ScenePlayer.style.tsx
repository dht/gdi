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
`;

export const Timeline = styled.div`
  height: 70px;

  &.bits {
    height: 30px;
  }
`;

export const Panel = styled.div`
  height: 125px;
  position: relative;
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
