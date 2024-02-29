import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 15px;
  flex: 1;
  padding: 20rem 40rem;
  display: flex;
  flex-direction: column;
`;

export const Ol = styled.ul`
  padding: 0;
  margin: 0;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
  margin: 0;
`;

export const Label = styled.div`
  width: 140px;
  font-size: 18px;
  font-weight: 100;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Cta = styled(Button)`
  float: right;
  margin-top: 20px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  border-radius: 6px;
  flex: 1;
  outline: none;
  border: none;
  resize: none;
  padding: 15px 15px;
  font-size: 18px;
  margin-top: 15px;
  box-sizing: border-box;
  color: var(--color-text);
  background-color: #111115;
  border: 1px solid rgba(245, 245, 255, 0.1);
`;
