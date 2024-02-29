import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: absolute;
  z-index: 100;
  background-color: #111;
  box-shadow: 0 0 0 2px rgba(235, 235, 235, 0.1);
  border: 1px solid #000;

  @media (max-width: 800px) {
    zoom: 0.5;
  }

  &.horizontal {
    .items {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  user-select: none;
  color: #aab;
  color: var(--green-800);

  &:hover {
    color: var(--green-900);
    background-color: var(--green-100);
  }

  &.selected {
    color: var(--green-900);
    background-color: var(--green-100);
  }
`;

export const Top = styled.div`
  background-color: #000;
  height: 10px;
`;

export const Items = styled.div``;
