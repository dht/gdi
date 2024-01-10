import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  font-size: 20rem;
  background-color: #334;
  display: flex;
  flex-direction: column;
`;

export const Charts = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  position: relative;
`;

export const Budget = styled.div`
  position: absolute;
  top: 10rem;
  left: 10rem;
`;
