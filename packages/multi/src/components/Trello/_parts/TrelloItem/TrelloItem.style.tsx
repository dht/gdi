import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0 12px;

  &.mirror {
    opacity: 0.45;

    &.grow {
      animation-name: grow;
      animation-duration: 200ms;
      animation-timing-function: linear;
      overflow: hidden;

      @keyframes grow {
        0% {
          max-height: 20px;
        }
        100% {
          max-height: 80px;
        }
      }
    }
  }
`;
