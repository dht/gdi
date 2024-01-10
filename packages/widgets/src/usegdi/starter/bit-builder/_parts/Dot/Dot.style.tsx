import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 22px;
  height: 22px;
  background-color: var(--green-200);
  border-radius: 5px;
  border: 2px solid transparent;

  &.focused {
    background-color: var(--green-900);

    &.exists {
      &:hover {
        border: 2px solid palevioletred;
      }
    }
  }

  &.exists {
    background-color: var(--gold-200);

    &.focused {
      background-color: var(--gold-900);
    }
  }
`;
