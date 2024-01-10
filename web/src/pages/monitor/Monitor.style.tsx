import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  --background: #112;
  --grid: rgba(255, 255, 255, 0.03);
  background-color: var(--background);
  display: grid;
  grid-template-columns: repeat(120, 1fr);
  grid-template-rows: repeat(48, 1fr);
  background-size: 25px 25px;
  background-image: linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
`;

export const Box = styled.div``;
