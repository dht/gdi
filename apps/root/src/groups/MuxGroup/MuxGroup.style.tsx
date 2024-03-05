import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Top = styled.div`
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;

export const Inner = styled.div`
  margin-top: 50px;
  display: flex;
  flex: 1;
  position: relative;
`;
