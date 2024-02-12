import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;

  &.minimal {
    .cards {
      max-width: 100vw;
      padding: 0;
      margin-top: 20px;
    }
  }

  @media (max-width: 800px) {
    margin-top: 40px;
  }
`;

export const Cards = styled.div`
  max-width: 1150px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;

  @media (max-width: 800px) {
    max-width: 100vw;
    padding: 10px 15px;
  }
`;
