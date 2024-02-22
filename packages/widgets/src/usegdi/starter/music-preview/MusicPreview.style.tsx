import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #222;
  display: flex;
  flex-direction: column;
`;

export const Player = styled.audio`
  width: 90%;
  margin: auto;
  flex: 1;
`;

export const Actions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 30px;
  justify-content: center;
`;
