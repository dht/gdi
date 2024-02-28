import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 16px;
  background-color: #000;
  color: white;
  display: flex;
  position: relative;
  height: 50px;
  user-select: none;
`;

export const Rect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  bottom: 0;
  background-color: purple;
  z-index: 0;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  // triangle bottom center
  &::before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: purple;
    transform: translateX(-50%);
  }
`;

export const Tabs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  bottom: 0;
  right: 0;
`;

export const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #ffffff22;
  }
`;
