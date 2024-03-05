import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  --grid: rgba(0, 0, 0, 0.15);
  --bk: white;
  --border: #000;

  &.dark {
    --grid: rgba(255, 255, 255, 0.15);
    --bk: #1e1e2e;
    --border: #aaa;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
`;

export const Summary = styled.div`
  background-color: var(--bk);
  display: flex;
  flex: 1;
`;
