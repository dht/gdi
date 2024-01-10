import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30vh;
  font-size: 20rem;
  --grid: rgba(0, 0, 0, 0.05);
  background-image: linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 30rem 30rem;
  color: #667;

  .icon {
    font-size: 80rem;
    margin-bottom: 24rem;
  }
`;

export const H2 = styled.h2`
  padding: 0;
  margin: 0;
`;

export const P = styled.p`
  font-size: 24rem;
  padding: 0;
  margin: 20rem 0 50rem;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    margin-right: 10rem;
  }
`;
