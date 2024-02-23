import styled from 'styled-components';
import Container from '../../../Container/Container';
import { Title as TitleBase } from '../../../Title/Title';

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  --grid: rgba(205, 205, 205, 0.1);
  background-image: linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 15px 15px;
`;

export const Title = styled(TitleBase)``;

export const P = styled.p`
  font-size: 20px;
  text-align: center;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.5);
  max-width: 550px;
  line-height: 1.6;
  padding: 0;
  margin: 30px 0 0;

  a {
    color: palevioletred;
  }
`;

export const Cta = styled.button`
  margin-top: 30px;
`;
