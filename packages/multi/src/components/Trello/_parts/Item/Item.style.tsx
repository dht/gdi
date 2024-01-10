import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background-color: #112;
  border-left: 7px solid transparent;
  border-radius: 3px;
  position: relative;
  user-select: none;
  padding: 15px 20px;

  &.hover {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  &.selected {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -6px;
      right: 0;
      bottom: 0;
      pointer-events: none;
      background-color: rgba(0, 0, 0, 0.1);
      border: 2px solid goldenrod;
      pointer-events: none;
    }
  }
`;
