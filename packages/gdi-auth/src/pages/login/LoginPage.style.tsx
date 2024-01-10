import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000;
`;

export const Logo = styled.img`
  position: fixed;
  top: 50px;
  left: 50px;
  width: 100px;
  height: 50px;
  cursor: pointer;

  @media (max-width: 800px) {
    top: 20px;
    left: 20px;
    width: 80px;
    height: 40px;
  }
`;

export const VideoBk = styled.div``;
