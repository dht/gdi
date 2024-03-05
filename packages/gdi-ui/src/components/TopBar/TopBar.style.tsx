import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  background-color: #000;
  user-select: none;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #000;
  padding-right: 10px;
  width: 277px;
  justify-content: space-between;
`;

export const Action = styled.div`
  margin: 0 5px;
`;

export const Tabs = styled.div`
  flex: 1;
`;
