import styled from 'styled-components';

const width = window.innerWidth;
const height = window.innerHeight;
const angle = Math.atan(height / width) * (180 / Math.PI);
const hypotenuse = Math.sqrt(width * width + height * height);

export const Wrapper = styled.div`
  position: fixed;
  top: -5px;
  left: -5px;
  width: ${hypotenuse}px; /* Adjust width as needed */
  height: 90px; /* Adjust height as needed */
  transform-origin: top left;
  transform: rotate(${angle}deg);
  background-color: gold;
  z-index: 9999; /* Adjust z-index as needed */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  pointer-events: none;

  &.small {
    right: -120px;
    left: unset;
    top: -30px;
    width: 300px;
    height: 40px;
    transform: rotate(45deg);

    .line {
      height: 5px;
    }

    .text {
      font-size: 20px;
      margin: 0 40px;
    }

    @media (max-width: 800px) {
      zoom: 0.7;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const Line = styled.div`
  height: 15px;
  background: repeating-linear-gradient(45deg, #333, #333 10px, gold 10px, gold 20px);
`;

export const Text = styled.span`
  font-size: 50px;
  color: #333;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  margin-left: 50px;
  text-transform: uppercase;
  margin: 0 100px;
  position: relative;
  top: 10px;
`;
