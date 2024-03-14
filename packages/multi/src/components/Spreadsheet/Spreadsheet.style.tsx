import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;

  --grid: rgba(0, 0, 0, 0.15);
  --bk: white;
  --border: #000;

  &.dark {
    --grid: rgba(255, 255, 255, 0.15);
    --bk: #1e1e2e;
    --border: #aaa;
  }
  max-height: 100vh;

  // cells
  background-color: var(--bk);

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  max-height: 100vh;
`;
