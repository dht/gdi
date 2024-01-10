import { Controls, ReactFlow } from 'reactflow';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
  color: #333;

  .react-flow__minimap-mask {
    fill: ${(props) => props.theme.minimapMaskBg};
  }

  .react-flow__minimap-node {
    fill: ${(props) => props.theme.nodeBg};
    stroke: none;
  }

  .react-flow__node-custom {
    font-size: 10px;
    width: 180px;
    background: #f5f5f6;
    color: #222;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 15%), 0 2px 4px -1px rgb(0 0 0 / 8%);
    border-radius: 2px;
  }

  .react-flow__node-custom .react-flow__handle {
    top: 24px;
    right: -15px;
    width: 6px;
    height: 10px;
    border-radius: 2px;
    background-color: #778899;
  }

  .react-flow__node.circle {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
  }

  .react-flow__node.annotation {
    border-radius: 0;
    text-align: left;
    background: white;
    border: none;
    line-height: 1.4;
    width: 225px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 15%), 0 2px 4px -1px rgb(0 0 0 / 8%);
  }

  .react-flow__node.annotation .react-flow__handle {
    display: none;
  }

  .custom-node__header {
    padding: 8px 10px;
    border-bottom: 1px solid #e2e8f0;
  }

  .custom-node__body {
    padding: 10px;
  }

  .custom-node__select {
    position: relative;
    margin-bottom: 10px;
  }

  .custom-node__select select {
    width: 100%;
    margin-top: 5px;
    font-size: 10px;
  }
`;

export const ReactFlowStyled = styled(ReactFlow)``;

export const ControlsStyled = styled(Controls)`
  button {
    background-color: ${(props) => props.theme.controlsBg};
    color: ${(props) => props.theme.controlsColor};
    border-bottom: 1px solid ${(props) => props.theme.controlsBorder};

    &:hover {
      background-color: ${(props) => props.theme.controlsBgHover};
    }

    path {
      fill: currentColor;
    }
  }
`;

export const minimapStyle = {
  height: 120,
  top: 0,
  display: 'none',
};

export const controlsStyle = {
  top: 140,
  display: 'none',
};
