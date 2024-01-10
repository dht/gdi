import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10rem;
  font-size: min(7rem, 10px); // minimum 12px
  background-color: rgba(0, 100, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
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
