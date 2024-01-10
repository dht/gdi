import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Toggler = styled.div`
  position: fixed;
  bottom: 10px;
  background-color: white;
  right: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
`;

export const Menu = styled.div`
  z-index: 5000;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  transition: all 0.3s;
  opacity: 0;
  pointer-events: none;
  display: flex;
  flex-direction: row;
  align-items: stretch;

  &.show {
    opacity: 1;
    pointer-events: all;
  }
`;

export const Content = styled.div`
  width: 70vw;
  min-width: 70vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s;
  left: -70vw;
  overflow-y: auto;

  &.show {
    left: 0;
  }
`;

export const Header = styled.div`
  padding: 20px;
  box-shadow: inset 0 -1px 0 0 #ddd;
  border-right: 5px solid #666;
`;

export const Scrollable = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 120px);
`;

export const Overlay = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Close = styled.div`
  position: fixed;
  top: 10px;
  background-color: white;
  right: 10px;
  padding: 10px;
  border-radius: 10px;
`;
