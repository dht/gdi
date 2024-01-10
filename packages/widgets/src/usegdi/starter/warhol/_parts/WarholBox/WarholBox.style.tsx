import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-size: 200% 200%;
  box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.04);
  position: relative;

  &.frame-2 {
    background-position: -100% 0;
  }

  &.frame-3 {
    background-position: 0 -100%;
  }

  &.frame-4 {
    background-position: -100% -100%;
  }
`;
