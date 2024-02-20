import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  color: white;
  font-size: 14px;
  flex-direction: column;
  background-color: #111;
  position: relative;
  padding-bottom: 110px;
`;

export const Content = styled.div`
  overflow-y: auto;
`;

export const Overlay = styled.div`
  position: absolute;
  height: 40px;
  width: 1000px;
  bottom: -40px;
  background-color: #111;
`;
