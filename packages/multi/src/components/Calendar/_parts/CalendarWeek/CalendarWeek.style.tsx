import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
`;
