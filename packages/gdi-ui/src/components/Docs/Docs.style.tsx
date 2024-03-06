import styled from 'styled-components';
import { Container as ContainerBase } from '../base.style';

export const Wrapper = styled.div`
  display: flex;
  font-size: 14px;
  flex: 1;
  background-color: white;
  color: #334;
  min-height: 80vh;

  &.modal {
    margin-bottom: 0;
    min-height: unset;
    position: relative;
    height: 90%;

    .container {
      padding: 10px;
    }

    .left {
      padding: 0;
      width: 200px;
    }

    .right {
      margin-left: 200px;
    }

    @media (max-width: 800px) {
      .left {
        display: none;
      }

      .right {
        margin-left: 0;
      }
    }
  }
`;

export const Container = styled(ContainerBase)`
  flex: 1;
  align-items: stretch;
  padding-top: 40px;

  @media (max-width: 800px) {
    padding-top: 30px;
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 300px;
  position: absolute;

  @media (max-width: 800px) {
    position: relative;
    display: block;
  }
`;

export const Right = styled.div`
  margin-left: 300px;

  @media (max-width: 800px) {
    margin-left: 0;
  }
`;

export const Next = styled.div`
  position: absolute;
  bottom: -40px;
  right: 20px;
`;
