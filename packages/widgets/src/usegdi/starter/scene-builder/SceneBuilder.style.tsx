import styled from 'styled-components';
import { Colors } from '../bit-builder/BitBuilder.colors';

export const Wrapper = styled(Colors)`
  flex: 1;
  background-color: #000;
  display: flex;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;

  > div,
  > button {
    pointer-events: auto;
  }
`;
