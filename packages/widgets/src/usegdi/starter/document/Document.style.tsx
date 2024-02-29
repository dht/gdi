import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: var(--color-primary);
  border: 1px solid var(--color-border);
  color: var(--color-text);
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
`;
