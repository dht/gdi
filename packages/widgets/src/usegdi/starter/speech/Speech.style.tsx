import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
  }
`;

export const Voices = styled.div`
  height: 250px;
  overflow: hidden;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Actions = styled.div`
  padding: 20rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Transcript = styled.div`
  background-color: #000;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextArea = styled.textarea`
  font-size: 20px;
  min-height: 50px;
  padding: 8px;
  width: 80%;
  color: white;
  background-color: #000;
  text-align: center;
  outline: none;
  border: none;
  resize: none;
  line-height: 1.5;
`;

export const Player = styled.div``;

export const Cta = styled(Button)`
  @media (max-width: 800px) {
    margin: 10px 15px 0;
  }
`;
