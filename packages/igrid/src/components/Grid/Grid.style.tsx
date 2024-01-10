import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: grid;
  --background: #fafafa;
  --grid: rgba(30, 0, 0, 0.08);
  --gridEdit: rgba(30, 0, 0, 0.15);
  --instance: #fff;
  --instanceBorder: #ddd;

  &.dark {
    --background: #232332;
    --grid: rgba(255, 255, 255, 0.05);
    --gridEdit: rgba(255, 255, 255, 0.1);
    --instance: rgba(21, 21, 32, 0.8);
    --instanceBorder: #223;
  }

  grid-template-columns: repeat(auto-fill, calc(100% / 121));
  grid-template-rows: repeat(auto-fill, calc(100% / 48));
  background-size: 25px 25px;
  --background: #fafafa;
  --grid: rgba(30, 0, 0, 0.08);
  background-color: var(--background);
  background-image: linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);

  &.fixed {
    grid-template-columns: repeat(auto-fill, 25px);
    grid-template-rows: repeat(auto-fill, 25px);
  }
`;
