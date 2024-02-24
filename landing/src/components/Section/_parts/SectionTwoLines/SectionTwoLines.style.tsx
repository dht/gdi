import styled from 'styled-components';
import Container from '../../../Container/Container';
import { Title as TitleBase } from '../../../Title/Title';

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 500px;

  @media (max-width: 768px) {
    min-height: 60vh;
  }
`;

export const Title = styled(TitleBase)``;

export const P = styled.p`
  margin-bottom: 96px;
  font-size: 21px;
  text-align: center;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.6);
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    text-align: left;
  }
`;
