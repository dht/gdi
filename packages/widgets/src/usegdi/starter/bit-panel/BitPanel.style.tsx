import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 210px;
  position: relative;

  @media (max-width: 800px) {
    zoom: 0.5;
  }
`;

export const Audio = styled.div`
  * {
    &::-webkit-scrollbar {
      height: 0;
    }
  }
`;

export const Timeline = styled.div``;

export const Loading = styled.div`
  height: 125px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Fps = styled.div`
  position: absolute;
  background-color: black;
  text-align: center;
  font-size: 16rem;
  color: #dfd;
  bottom: 270px;
  padding: 3rem 10rem;
  left: 10rem;
  border-radius: 10rem;
  z-index: 99;
  opacity: 0.4;
  box-shadow: inset 0 0 1px 1px rgba(255, 255, 255, 0.2);
`;

export const BitName = styled.div`
  position: absolute;
  background-color: black;
  text-align: center;
  font-size: 16rem;
  color: #dfd;
  bottom: 244px;
  padding: 3rem 10rem;
  left: 10rem;
  border-radius: 10rem;
  z-index: 99;
  opacity: 0.4;
  box-shadow: inset 0 0 1px 1px rgba(255, 255, 255, 0.2);
`;
