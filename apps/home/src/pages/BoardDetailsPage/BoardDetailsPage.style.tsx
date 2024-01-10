import styled from 'styled-components';
import { Container as ContainerBase } from '../../components/base.style';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  font-size: 14px;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Container = styled(ContainerBase)``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 50px;

  @media (max-width: 800px) {
    display: block;
    padding: 10px;
  }
`;

export const Left = styled.div`
  flex: 1;
  padding-right: 80px;

  @media (max-width: 800px) {
    padding-right: 0;
  }
`;

export const Right = styled.div`
  width: 372px;
  margin-bottom: 50px;
`;
