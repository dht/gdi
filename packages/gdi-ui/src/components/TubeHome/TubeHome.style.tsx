import styled from 'styled-components';

export const Wrapper = styled.div`
  &.minimal {
    .cards {
      max-width: 100vw;
      padding: 0;
      margin-top: 20px;
    }
  }
`;

export const Cards = styled.div`
  max-width: 1150px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 30px 30px;

  @media (max-width: 800px) {
    max-width: 100vw;
    padding: 10px 15px;
  }
`;
