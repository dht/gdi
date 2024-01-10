import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #334;
  padding: 20rem;
  overflow: auto;

  @media (max-width: 800px) {
    padding: 0;
    background-color: #333;
  }
`;

export const Info = styled.div`
  color: #ccd;
`;
