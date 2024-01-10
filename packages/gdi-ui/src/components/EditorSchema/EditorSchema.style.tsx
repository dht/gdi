import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 20rem 10rem;
  border-top: 1px solid #778;

  > button {
    margin: 0 5rem;
    padding: 10rem;
    min-width: 100rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;
