import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  background-color: #223;
  overflow-y: auto;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  font-size: 16px;
  line-height: 1.4;
  color: #aab;
  padding: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  resize: none;
  flex: 1;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #334;
  padding: 0 10px 0 20px;
  background-color: #001;
`;

export const Cta = styled(Button)`
  margin-right: 10px;
`;

export const Gap = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
`;
