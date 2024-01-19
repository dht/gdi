import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 10px;
`;
