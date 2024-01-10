import styled from 'styled-components';

export const Wrapper = styled.div`
  --grid: rgba(255, 255, 255, 0.1);
  flex: 1;
  font-size: 14px;
  background-color: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 25px 25px;
`;

export const Logo = styled.img`
  position: fixed;
  top: 50px;
  left: 50px;
  width: 100px;
  height: 50px;
  cursor: pointer;

  @media (max-width: 800px) {
    top: 10px;
    left: 10px;
    width: 70px;
  }
`;

export const Content = styled.div`
  font-size: 30px;
  text-align: center;
  color: white;
  width: 100%;

  @media (max-width: 800px) {
    padding: 15vw;
    font-size: 24px;
  }
`;
