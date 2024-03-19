import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  margin: 4px;
  user-select: none;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #333;
  box-shadow: inset 0 0 2px 1px rgba(255, 255, 255, 0.1);
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #111;
  }

  &.selected {
    color: #888;
  }
`;

export const Id = styled.div`
  position: absolute;
  bottom: 2px;
  right: 2px;
  font-size: 10px;
`;

export const Current = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  font-size: 10px;
  color: #888;
`;
