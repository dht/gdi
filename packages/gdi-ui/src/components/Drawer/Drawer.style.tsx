import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 44rem;
  width: 56vw;
  background-color: #111;
  z-index: 4;
  font-size: 18rem;
  color: #aaa;
  transition: all 20ms ease-in-out;
  opacity: 0;
  pointer-events: none;

  &.open {
    opacity: 1;
    pointer-events: all;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5rem 10rem;
  border-bottom: 1rem solid #333;
`;

export const Title = styled.div`
  color: #aaa;
  flex: 1;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.div``;
