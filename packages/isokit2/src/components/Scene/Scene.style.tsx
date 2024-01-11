import styled from 'styled-components';
import ToolboxContainer from '../Toolbox/Toolbox.container';

const totalWidth = Math.min(1700, window.innerWidth);
const center = window.innerWidth / 2;
const left = center - totalWidth / 2;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;

export const Canvas = styled.canvas`
  outline: none;
  max-width: 100vw;
  max-height: 100vh;
`;

export const ToolboxMain = styled(ToolboxContainer)`
  top: 200px;
  left: ${left + 50}px;
`;

export const ToolboxTop = styled(ToolboxContainer)`
  top: 20px;
  left: calc(min(1700px, 100vw) - 500px);

  @media (max-width: 800px) {
    left: 20px;
    right: auto;
    top: 100px;
    width: 225px;
  }
`;

export const Loading = styled.div`
  position: fixed;
  top: 40px;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 165px;
  height: 40px;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
`;
