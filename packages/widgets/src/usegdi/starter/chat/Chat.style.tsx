import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #333;
  border-radius: 5rem;
  padding: 10rem;
  overflow: auto;
  color: white;
  font-size: 23rem;

  @media (max-width: 800px) {
  }
`;

export const Lines = styled.div`
  height: 0;
  overflow: auto;
`;

export const Gap = styled.div`
  height: 5vh;
`;
