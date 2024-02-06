import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  transform: scale(0.1);

  &.show {
    opacity: 1;
    transform: none;
  }
`;
