import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .TableRowActions-wrapper {
    opacity: 0;
    pointer-events: none;
  }

  &.selected {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:hover {
    .TableRowActions-wrapper {
      opacity: 1;
      pointer-events: all;
    }
  }
`;
