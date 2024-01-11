import styled from 'styled-components';

const totalWidth = Math.min(1700, window.innerWidth);
const center = window.innerWidth / 2;
const right = center + totalWidth / 2;

export const Wrapper = styled.div`
  position: fixed;
  top: 185px;
  left: ${right - 170}px;
  z-index: 999;
  background-color: #000;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  font-size: 14px;
  color: rgb(85, 125, 85);

  @media (max-width: 800px) {
    zoom: 0.5;
    right: 30px;
    left: auto;
  }

  .JsonTable-wrapper {
    margin: 0;
    padding: 10px;
  }

  .pair {
    padding: 0;
  }

  .key {
    min-width: 50px;
    text-align: center;
  }

  .value {
    width: 50px;
  }
`;
