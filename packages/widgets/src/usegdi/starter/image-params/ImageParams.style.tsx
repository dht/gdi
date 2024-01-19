import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #334;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 30px;
  font-size: 20px;

  .Form-wrapper {
    zoom: 1.2;
    color: white;
  }

  @media (max-width: 800px) {
    padding-bottom: 0;
  }
`;

export const TextArea = styled.textarea`
  flex: 1;
  font-size: 18px;
  background-color: transparent;
  border: none;
  color: white;
  padding: 30px;
  resize: none;
  outline: none;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20rem;
`;

export const Cta = styled(Button)``;

export const H2 = styled.div``;
