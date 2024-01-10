import styled from 'styled-components';
import { Container as ContainerBase } from '../components/base.style';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  background-color: white;
`;

export const Content = styled.div``;

export const Container = styled(ContainerBase)``;

export const H1 = styled.h1`
  margin-top: 4vh;
  font-weight: 200;
`;
