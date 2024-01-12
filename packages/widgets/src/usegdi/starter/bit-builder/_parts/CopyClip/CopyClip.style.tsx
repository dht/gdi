import styled from 'styled-components';

const totalWidth = Math.min(1700, window.innerWidth);
const center = window.innerWidth / 2;
const left = center - totalWidth / 2;

export const Wrapper = styled.div`
  flex: 1;
  position: fixed;
  left: ${left + 10}px;
  bottom: 400px;
  z-index: 4;
  background-color: rgba(235, 255, 235, 0.1);
  border-radius: 5px;
  padding: 5px;
  color: #676;

  @media (max-width: 800px) {
    display: none;
  }
`;
