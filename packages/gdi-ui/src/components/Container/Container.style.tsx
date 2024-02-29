import styled from 'styled-components';

export const Wrapper = styled.div`
  width: calc(min(100%, 1400px));
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  &.row {
    flex-direction: row;
  }
`;

export const H1 = styled.h1``;
