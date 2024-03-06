import styled from 'styled-components';
import Container from '../../../Container/Container';

export const Wrapper = styled(Container)`
  flex: 1;
  width: 780px;
  padding: 40px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: black;
  --grid: rgba(205, 205, 205, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  box-shadow: 0 0 20px 1px #ffffff13;
  background-image: linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 15px 15px;

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
    flex-direction: column;
  }
`;

export const Column = styled.div`
  padding-right: 50px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Title = styled.h3`
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 20px;
    line-height: 1.4;
  }
`;

export const P = styled.p`
  font-size: 15px;
  line-height: 1.4;
  padding: 0;
  margin: 20px 0 0;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 30px;
  }
`;

export const Cta = styled.a`
  border: 1px solid #333;
  background-color: rgba(255, 255, 255, 0.05);

  @media (max-width: 768px) {
    width: 100%;
    font-size: 15px;
    padding: 10px 0;
  }
`;

export const Video = styled.video`
  position: absolute;
  left: -300px;
  top: -100px;
  width: 400px;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
  }
`;

export const Seat = styled.div`
  position: absolute;
  left: -115px;
  top: 90px;
  width: 30px;
  height: 70px;
  border: 1px solid #39c4bd8b;
`;
