import styled from 'styled-components';
import { Colors } from '../bit-builder/BitBuilder.colors';

export const Wrapper = styled(Colors)`
  flex: 1;
  background-color: #000;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 14px;

  .BitPanel-wrapper {
    height: 235px;
  }

  canvas {
    z-index: 1;
    position: absolute;
    height: 100vh;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Stage = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: calc(100vh - 250px);
  margin: auto;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 0;
  transform: translateX(-50%);
  /* opacity: 0; */
  /* display: none; */
`;

export const Mask = styled.img`
  flex: 1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  height: calc(100vh - 265px);
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  pointer-events: none;
  z-index: 99;
  top: 0;
  /* opacity: 0; */
  mask-image: url(/boards/assets/stage-mask.png);
  /* display: none; */

  right: 0;
  top: 0;
  bottom: 0;
`;

export const Canvas = styled.div`
  flex: 1;
  background-image: url(/boards/assets/bk.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000;
  position: relative;
  display: flex;
`;
