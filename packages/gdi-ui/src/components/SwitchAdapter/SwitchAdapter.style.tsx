import styled from 'styled-components';
import Button from '../Button/Button';

export const Wrapper = styled.div`
  flex: 1;
  width: 380px;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 50px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Cta = styled(Button)``;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #aaa;
  margin-top: 10px;
  padding-top: 10px;
`;

export const Input = styled.input`
  margin-bottom: 30px;
  padding: 7px 10px;
  border-radius: 10px;
  border: 1px solid #aaa;
  width: 250px;
`;

export const Cancel = styled(Button)``;

export const P = styled.p`
  color: #556;
  padding: 0 10px 10px;
  margin: 0;
`;
