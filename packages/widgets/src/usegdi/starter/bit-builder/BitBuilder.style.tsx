import styled from 'styled-components';
import { Colors } from './BitBuilder.colors';

export const Wrapper = styled(Colors)`
  flex: 1;
  background-color: #000;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #fff;
`;

export const Canvas = styled.div`
  flex: 1;
  display: flex;
`;
