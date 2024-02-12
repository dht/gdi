import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-size: bold;

  svg {
    margin-left: 4px;
    position: relative;
    top: -2px;

    polygon {
      fill: white;
      stroke: black;
      stroke-width: 3px;
    }
  }

  &.rated {
    svg {
      polygon {
        fill: #f5a623;
        stroke: #f5a623;
      }
    }
  }
`;

export const Count = styled.div`
  color: #aaa;
`;
