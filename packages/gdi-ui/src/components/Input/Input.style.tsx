import styled from 'styled-components';

export const Wrapper = styled.input`
  flex: 1;
  padding: 10rem 10rem;
  border: 1px solid var(--border-color);
  border-radius: 5rem;
  color: #334;
  font-family: 'Roboto Flex', monospace;
  width: calc(100% - 37rem);

  @media (max-width: 768px) {
  }

  &.dark {
    background-color: #111115;
    color: #ccc;
    outline: none;
    border: 1px solid #445;
  }
`;
