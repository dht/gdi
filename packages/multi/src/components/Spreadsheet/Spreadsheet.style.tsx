import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;

  --grid: rgba(0, 0, 0, 0.15);

  // cells
  background-image: linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 200px 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: repeat(auto-fill, 30px);
  background-color: white;
`;
