import styled from 'styled-components';

const totalWidth = Math.min(1700, window.innerWidth);
const center = window.innerWidth / 2;
const right = center + totalWidth / 2;

export const Wrapper = styled.button`
  position: fixed;
  z-index: 4;
  bottom: 260px;
  background-color: #121;
  padding: 10px;
  border-radius: 15px;
  color: #676;
  left: ${right - 170}px;
  font-size: 20px;
  border-top: 2px solid #232;
  border-right: 2px solid #232;
  border-bottom: 3px solid #000;
  border-left: 3px solid #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  outline: none;

  @media (max-width: 800px) {
    zoom: 0.5;
    bottom: 225px;
    left: auto;
    right: 20px;
  }

  &:hover {
    background-color: #232;
  }

  &:active,
  &.active {
    border-bottom: 2px solid #232;
    border-left: 2px solid #232;
    border-top: 3px solid #000;
    border-right: 3px solid #000;
    background-color: #232;
  }
`;

export const Title = styled.div`
  font-size: 18px;
`;

export const Short = styled.div`
  font-size: 12px;
  opacity: 0.5;
`;

export const Column = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
