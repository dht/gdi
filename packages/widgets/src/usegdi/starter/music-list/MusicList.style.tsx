import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #111;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const Top = styled.div`
  height: 50px;
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const List = styled.div`
  flex: 1;
  overflow: auto;
`;
