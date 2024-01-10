import styled from 'styled-components';

export const Container = styled.div<{ row?: boolean }>`
  padding: 0 80px;
  flex: 1;

  &.details {
    max-width: 1280px;
    margin: 0 auto;
  }

  ${(props) =>
    props.row &&
    `
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between; 
    `}

  @media screen and (min-width: 1350px) {
  }

  @media screen and (min-width: 1435px) {
  }

  @media screen and (min-width: 1500px) {
  }

  @media screen and (min-width: 1900px) {
  }

  @media screen and (min-width: 2500px) {
  }

  @media screen and (min-width: 3800px) {
  }
`;
