import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #000;
  padding-right: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 50px;
  z-index: 99999;
`;

export const Inner = styled.div`
  margin-top: 50px;
  display: flex;
  flex: 1;
  position: relative;
`;
