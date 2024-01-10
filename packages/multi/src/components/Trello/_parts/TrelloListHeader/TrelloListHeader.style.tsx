import styled from 'styled-components';

export const Container = styled.h2`
  font-weight: 200;
  font-size: 22rem;
  user-select: none;
  padding: 10px 5px;
  margin: 0 0 5px;
  pointer-events: none;

  &:hover {
    box-shadow: inset 0 0 5px 5px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    border: 1px solid gold;
  }
`;
