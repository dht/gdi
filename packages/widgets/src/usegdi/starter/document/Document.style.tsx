import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #334;
  display: flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: none;
  outline: none;
  resize: none;
  color: #dde;
  margin: 40rem;
  font-size: 24rem;
  line-height: 1.3;
`;

export const Actions = styled.div`
  padding: 20rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    margin-bottom: 70px;
  }
`;
