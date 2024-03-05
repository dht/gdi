import styled from 'styled-components';
import Button from '../../../Button/Button';

export const Wrapper = styled.div`
  flex: 1;
  max-width: 500px;
  padding-top: 20px;

  h3 {
    font-size: 18px;
  }
`;

export const Content = styled.div``;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #e0e0e0;
  margin-top: 15px;
  padding-top: 15px;
`;

export const Cta = styled(Button)``;

export const DeleteKeys = styled.a`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: darkred;
  }
`;

export const Field = styled.div`
  margin-bottom: 20px;

  input {
    background-color: #eee;
    margin-top: 10px;
    zoom: 1.2;
  }
`;

export const Label = styled.div``;
