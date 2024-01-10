import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  padding: 0 7rem 0 15rem;
  min-height: 100rem;
  min-width: 300rem;
  display: flex;
  flex-direction: column;

  &.form {
    padding-bottom: 10rem;
  }
`;

export const P = styled.p`
  font-size: 18rem;
  flex: 1;
`;

export const Content = styled.div`
  padding-bottom: 25rem;
  padding-right: 8rem;

  &.form,
  &.custom {
    padding-bottom: 0;
  }
`;

export const Description = styled.p``;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10rem;

  > button {
    margin: 0 5rem;
    padding: 10rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Warning = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1rem solid #e91e63;
  margin: 20rem 0 5rem;
  padding: 10rem;
  border-radius: 5rem;
  color: #e91e63;
  max-width: 500rem;
  line-height: 22rem;
`;

export const WarningIcon = styled.div`
  font-size: 20rem;
  margin-right: 8rem;
`;

export const WarningText = styled.div`
  font-size: 16rem;
`;
