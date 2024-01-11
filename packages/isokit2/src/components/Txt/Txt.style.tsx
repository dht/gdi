import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: absolute;
  /* opacity: 0; */
  pointer-events: none;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: opacity 0.1 ease-out;
  z-index: 9999;
  display: flex;
  opacity: 1;
  transition: opacity 1.2s ease-out;
`;

export const Inner = styled.div`
  position: relative;
  display: flex;
  margin: 150px 150px 30px 150px;
  flex: 1;
`;

export const Text = styled.div`
  font-size: 100rem;
  position: absolute;
  top: 10rem;
  left: 10rem;
  // green
  font-family: 'Blanka';
  color: rgba(181, 238, 159, 0.715);
  text-shadow: 0 0 10px rgba(181, 238, 159, 0.415);
  animation: glowingAnimation 5s infinite;
  letter-spacing: 10rem;
  transform: perspective(1000px) rotateX(-15deg) scaleX(0.9) translateY(-40px);

  @keyframes glowingAnimation {
    0% {
      text-shadow: 0 0 10px rgba(181, 238, 159, 0.415);
    }

    8% {
    }

    25% {
      text-shadow: 0 0 10px rgba(181, 238, 159, 0.415);
    }

    37% {
    }

    50% {
      text-shadow: 0 0 20px rgba(181, 238, 159, 0.415), 0 0 30px rgba(181, 238, 159, 0.415),
        0 0 40px rgba(181, 238, 159, 0.415), 0 0 50px rgba(181, 238, 159, 0.415),
        0 0 60px rgba(181, 238, 159, 0.415);
    }

    80% {
      text-shadow: 0 0 10px rgba(181, 238, 159, 0.415);
    }
  }
`;

export const Subtext = styled.div`
  font-size: 26rem;
  position: absolute;
  top: 125rem;
  left: 5rem;
  // green
  font-family: 'Ailerons';
  color: rgba(181, 238, 159, 0.615);
  text-shadow: 0 0 10px rgba(181, 238, 159, 0.415);
  letter-spacing: 10rem;
  width: 450rem;
  transform: perspective(1000px) rotateX(15deg) scaleX(0.9) translateY(-40px);
  text-shadow: 0 0 20px rgba(181, 238, 159, 0.415), 0 0 30px rgba(181, 238, 159, 0.415),
    0 0 40px rgba(181, 238, 159, 0.415), 0 0 50px rgba(181, 238, 159, 0.415),
    0 0 60px rgba(181, 238, 159, 0.415);
`;

export const SmallPrint = styled.div`
  font-size: 11rem;
  position: absolute;
  bottom: 30rem;
  left: calc(320px + 45rem);
  right: 45rem;
  text-align: justify;
  font-family: 'Syncopate', sans-serif;
  color: rgba(181, 238, 159, 0.415);
  text-shadow: 0 0 10px rgba(181, 238, 159, 0.415);
  letter-spacing: 3rem;
  line-height: 2;
  text-shadow: 0 0 5px rgba(181, 238, 159, 0.415), 0 0 7px rgba(181, 238, 159, 0.415),
    0 0 9px rgba(181, 238, 159, 0.415), 0 0 1px rgba(181, 238, 159, 0.415),
    0 0 13px rgba(181, 238, 159, 0.415);
`;
