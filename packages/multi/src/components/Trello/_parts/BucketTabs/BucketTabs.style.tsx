import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-top: 1px solid #445;
  padding-bottom: 20px;
  --height: 28px;
  --color: #ccd;
  --bk-color: #334;
  --border-color: #556;
  background-color: #232332;
  --grid: rgba(255, 255, 255, 0.05);
  background-size: 25px 25px;
  background-image: linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
`;

export const Tab = styled.div`
  display: flex;
  height: var(--height);
  line-height: var(--height);
  flex-direction: row;
  align-items: stretch;
  cursor: pointer;
  border-top: 1px solid transparent;
  box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0.4);
  position: relative;
  top: -2px;
  border-radius: 0 0 10px 10px;
  width: 120px;

  &:first-child {
    margin-left: 30px;
  }

  &:hover {
    --bk-color: rgba(255, 255, 255, 0.1);
    --color: #eef;
    box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0);
  }

  &.selected {
    --bk-color: #223;
    --color: gold;
    font-weight: 600;
    box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0);

    &::after {
      content: '';
      background: #223;
      position: absolute;
      top: 0;
      left: 1px;
      right: 1px;
      height: 1px;
    }

    .title {
      top: -2px;
    }
  }
`;

export const Title = styled.div`
  flex: 1;
  color: var(--color);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
`;

export const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;

  polygon {
    fill: var(--bk-color);
    stroke: var(--border-color);
    stroke-width: 1px;
  }
`;
