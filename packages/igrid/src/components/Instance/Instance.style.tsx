import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 50px;
  flex: 1;
  display: flex;
  border-radius: 16px;
  box-sizing: border-box;

  &.transparent {
    background-color: transparent;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
`;
