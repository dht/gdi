import styled from 'styled-components';
export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div``;

export const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 180px);
  background-color: white;

  @media (max-width: 800px) {
    min-height: 0;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-bottom: 30vh;

  @media (max-width: 800px) {
    margin-top: 20vh;
    margin-bottom: 0;
  }
`;
