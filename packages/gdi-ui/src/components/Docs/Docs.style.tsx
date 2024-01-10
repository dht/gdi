import styled from 'styled-components';
import { Container as ContainerBase } from '../base.style';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  font-size: 14px;
  margin-bottom: 20vh;
  min-height: 100vh;
`;

export const Container = styled(ContainerBase)`
  flex: 1;
  align-items: stretch;
  padding-top: 80px;

  @media (max-width: 800px) {
    padding-top: 30px;
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 300px;
  position: fixed;

  @media (max-width: 800px) {
    position: relative;
    display: block;
  }
`;

export const Right = styled.div`
  flex: 1;
  margin-left: 300px;

  @media (max-width: 800px) {
    margin-left: 0;
  }
`;
