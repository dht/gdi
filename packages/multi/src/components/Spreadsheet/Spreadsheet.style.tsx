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
  user-select: none;

  // cells
  background-color: var(--bk);

  display: flex;
  flex-direction: column;
`;
