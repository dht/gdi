import styled from 'styled-components';
import { Container as ContainerBase } from '../base.style';

export const Wrapper = styled.div`
  position: fixed;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  right: 0;
  width: 40px;
  height: 50vh;
  bottom: 35px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Container = styled(ContainerBase)`
  transform: rotate(-90deg) translateX(-80%);
  transform-origin: left top 0;
  width: 50vh;
  height: 40px;
  // cancel flex
  flex: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
