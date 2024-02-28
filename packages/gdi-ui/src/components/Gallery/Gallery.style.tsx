import styled from 'styled-components';

export const Wrapper = styled.div`
  --breakpoint-grid_columns: 3;
  --breakpoint-grid_column-gap: 24px;
  --breakpoint-grid_row-gap: 40px;
  --item-width: calc((100vw - 160px) / var(--breakpoint-grid_columns)) -
    var(--breakpoint-grid_row-gap);

  --image-size: 600px;
  padding: 30px 20px 100px;

  @media screen and (min-width: 1350px) {
    --breakpoint-grid_columns: 4;
    --image-size: 600px;
  }

  @media screen and (min-width: 1435px) {
  }

  @media screen and (min-width: 1500px) {
    --breakpoint-grid_columns: 5;
  }

  /* @media screen and (min-width: 1900px) {
    --breakpoint-grid_columns: 6;
  }

  @media screen and (min-width: 2500px) {
    --breakpoint-grid_columns: 7;
  }

  @media screen and (min-width: 3800px) {
  } */

  @media screen and (max-width: 850px) {
    --breakpoint-grid_columns: 2;
    --breakpoint-grid_column-gap: 14px;
    padding: 15px 0 0;
    max-width: 100vw;
    overflow: hidden;
  }

  box-sizing: border-box;
  flex: 1;
  display: grid;
  grid-auto-flow: row dense;
  grid-auto-rows: var(--breakpoint-grid_auto-rows, minmax(min-content, max-content));
  grid-gap: var(--breakpoint-grid_row-gap, 0) var(--breakpoint-grid_column-gap, 0);
  grid-template-columns: var(
    --breakpoint-grid_column-template,
    repeat(var(--breakpoint-grid_columns, 1), minmax(0, 1fr))
  );
`;
