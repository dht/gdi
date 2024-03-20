import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  width: 1200px;
  max-width: calc(100vw - 50px);
  height: 900px;
  max-height: calc(100vh - 50px);
  background-color: #111;
  color: #aaa;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  flex: 1;

  &:first-child {
  }
`;

export const Cta = styled.button`
  border: none;
  padding: 9px 10px;
  font-size: 15px;
  color: #ccc;
  margin-left: 10px;
  cursor: pointer;
  position: relative;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    bottom: 1px;
    left: 1px;
  }

  &.red {
    background-color: #4b0000;
  }

  &.purple {
    background-color: purple;
    color: white;
  }

  &.link {
    background-color: transparent;
    color: #333;
  }

  &.gold {
    background-color: goldenrod;
    color: #333;
  }
`;

export const Checkbox = styled.input``;

export const PanelActions = styled.div`
  padding: 10px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &.actions-0 {
    input,
    label {
      display: none;
    }
  }
`;

export const Actions = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
