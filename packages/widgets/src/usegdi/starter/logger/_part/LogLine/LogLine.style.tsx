import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 5rem 12rem;

  > div {
    padding: 5rem;
  }

  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const SourceAndVerb = styled.div`
  min-width: 200rem;
  display: flex;
  flex-direction: row;
`;

export const Verb = styled.div`
  color: yellowgreen;
`;

export const Divider = styled.div`
  color: #988;
`;

export const Source = styled.div`
  color: brown;
`;

export const Message = styled.div`
  flex: 1;
  color: #bbc;
`;

export const Data = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  text-decoration: underline;
  color: #888;
`;
