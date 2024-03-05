import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  background-color: #000;
`;

export const Content = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 999;
  width: 50vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  position: fixed;
  top: 50px;
  left: 40px;
  width: 80px;
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

export const Github = styled.img`
  width: 30px;
  position: absolute;
  top: 50px;
  right: 42px;
  cursor: pointer;
`;
