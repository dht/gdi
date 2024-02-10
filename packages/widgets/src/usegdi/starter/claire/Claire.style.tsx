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

  canvas {
    flex: 1;
    width: 100%;
    height: 100%;
  }
`;
