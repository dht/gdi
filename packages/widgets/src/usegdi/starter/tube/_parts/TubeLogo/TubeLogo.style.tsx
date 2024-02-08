import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
`;

export const Logo = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(https://raw.githubusercontent.com/dht/gdi-assets/main/icon-gdi-tube.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Text = styled.div`
  font-weight: bold;
  font-size: 40px;
  letter-spacing: -2px;
  font-family: 'Roboto Flex', monospace;
`;
