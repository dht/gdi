import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.svg`
  display: flex;
  position: relative;
  align-content: space-around;
  justify-content: center;

  .loader-svg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    fill: none;
    stroke-width: 5px;
    stroke-linecap: round;
  }
  .loader-svg.bg {
    stroke-width: 8px;
  }

  &.purple {
    .loader-svg {
      stroke: rgb(64, 0, 148);
    }
    .loader-svg.bg {
      stroke: rgb(207, 205, 245);
    }
  }

  &.gray {
    .loader-svg {
      stroke: rgb(64, 63, 63);
    }
    .loader-svg.bg {
      stroke: rgb(207, 205, 245);
    }
  }

  .animate {
    stroke-dasharray: 242.6;
    animation: fill-animation 1s cubic-bezier(1, 1, 1, 1) 0s infinite;
  }

  @keyframes fill-animation {
    0% {
      stroke-dasharray: 40 242.6;
      stroke-dashoffset: 282.6;
    }

    50% {
      stroke-dasharray: 141.3;
      stroke-dashoffset: 141.3;
    }

    100% {
      stroke-dasharray: 40 242.6;
      stroke-dashoffset: 0;
    }
  }
`;
