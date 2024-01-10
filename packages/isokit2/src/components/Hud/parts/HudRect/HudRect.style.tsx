import styled from 'styled-components';

export const Wrapper = styled.g`
  flex: 1;

  .rect-top-right {
    animation: dashTopRight 0.4s linear forwards;
  }

  .rect-top-left {
    animation: dashTopLeft 0.4s linear forwards;
  }

  .rect-bottom-right {
    animation: dashBottomRight 0.4s linear forwards;
  }

  .rect-bottom-left {
    animation: dashBottomLeft 0.4s linear forwards;
  }

  @keyframes dashTopRight {
    0% {
      transform: scaleX(0.1) scaleY(0);
    }

    50% {
      transform: scaleX(0.1) scaleY(-1);
    }

    100% {
      transform: scaleX(1) scaleY(-1);
    }
  }

  @keyframes dashTopLeft {
    0% {
      transform: scaleX(-0.1) scaleY(0);
    }

    50% {
      transform: scaleX(-0.1) scaleY(-1);
    }

    100% {
      transform: scaleX(-1) scaleY(-1);
    }
  }

  @keyframes dashBottomRight {
    0% {
      transform: scaleX(0.1) scaleY(0);
    }

    50% {
      transform: scaleX(0.1) scaleY(1);
    }

    100% {
      transform: scaleX(1) scaleY(1);
    }
  }

  @keyframes dashBottomLeft {
    0% {
      transform: scaleX(-0.1) scaleY(0);
    }

    50% {
      transform: scaleX(-0.1) scaleY(1);
    }

    100% {
      transform: scaleX(-1) scaleY(1);
    }
  }
`;

export const Clip = styled.clipPath``;
