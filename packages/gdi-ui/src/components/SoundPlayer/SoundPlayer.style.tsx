import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  font-size: 30px;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100px;
`;

export const Player = styled.div`
  flex: 1;
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 0;
  right: 10px;
  z-index: 999;
`;
