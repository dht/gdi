import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 10rem;
  font-size: 7rem;
  background-color: rgba(0, 100, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 7rem;
`;

export const Value = styled.div`
  &::after {
    content: ' | ';
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
`;
