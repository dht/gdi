import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 560px;

  @media (max-width: 800px) {
    display: block;
    height: auto;
  }
`;

export const Left = styled.div`
  flex: 1;
  height: 560px;
  display: flex;

  @media (max-width: 800px) {
    height: auto;
  }
`;

export const Right = styled.div`
  flex: 1;
  height: 560px;
  display: flex;

  @media (max-width: 800px) {
    height: 300px;
  }
`;

export const Image = styled.div`
  background-size: cover;
  flex: 1;
  position: relative;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Video = styled.div`
  flex: 1;
  background-color: #112;
`;
