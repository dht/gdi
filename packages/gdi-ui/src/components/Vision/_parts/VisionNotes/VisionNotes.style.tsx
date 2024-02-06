import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  width: 860px;
  height: 750px;
  border-radius: 40px;

  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Side = styled.div`
  width: 300px;
`;

export const Content = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 10px 10px 30px 30px;
  padding: 26px 20px;
  overflow: auto;
  max-height: 640px;
`;
