import styled from 'styled-components';
import Container from '../../../Container/Container';

export const Wrapper = styled(Container)`
  flex: 1;
  border: 1px solid green;
  width: 780px;
  padding: 40px 30px;
  border: 3px solid #333;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: black;
  --grid: rgba(205, 205, 205, 0.1);
  border: 4px solid var(--grid);
  box-shadow: 0 0 20px 1px #ffffff13;
  background-image: linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 15px 15px;
`;

export const Column = styled.div`
  padding-right: 50px;
`;

export const Title = styled.h3`
  padding: 0;
  margin: 0;
`;

export const P = styled.p`
  color: white;
  font-size: 15px;
  line-height: 1.4;
  padding: 0;
  margin: 20px 0 0;
`;

export const Cta = styled.a`
  border: 1px solid #333;
  background-color: rgba(255, 255, 255, 0.05);
`;
