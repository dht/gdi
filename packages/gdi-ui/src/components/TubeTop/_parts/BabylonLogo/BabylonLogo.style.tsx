import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(https://raw.githubusercontent.com/dht/gdi-assets/main/assets/icons/icon-babylon.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Text = styled.div`
  font-weight: bold;
  font-size: 40px;
  letter-spacing: -2px;
`;

export const Subtitle = styled.div`
  font-weight: 100;
  font-size: 20px;
`;
