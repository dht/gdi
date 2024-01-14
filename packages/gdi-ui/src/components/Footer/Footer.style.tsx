import styled from 'styled-components';
import { Container as ContainerBase } from '../base.style';

export const Wrapper = styled.div`
  position: fixed;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  right: 0;
  width: 21px;
  height: 50vh;
  bottom: 35px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Container = styled(ContainerBase)`
  transform: rotate(-90deg) translateX(-80%);
  transform-origin: left top;
  width: 50vh;
  height: 20px;
  // cancel flex
  flex: none;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  pointer-events: none;
`;

export const Version = styled.div`
  font-size: 12px;
  color: #999;
  margin-left: 10px;
`;
