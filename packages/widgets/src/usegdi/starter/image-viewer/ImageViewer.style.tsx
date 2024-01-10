import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #334;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img``;

export const Prompt = styled.div`
  font-size: 20px;
  color: #aab;
  font-weight: 200;
  padding: 30rem;
  background-color: rgba(0, 0, 0, 0.2);
  max-height: 10vh;
  overflow: auto;
`;

export const Actions = styled.div`
  padding: 20rem;
`;
