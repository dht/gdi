import styled from 'styled-components';
import Button from '../Button/Button';

export const Wrapper = styled.div`
  flex: 1;
  padding: 10px 10px 0 10px;
`;

export const P = styled.p`
  max-width: 440px;
  line-height: 1.4;
  color: #556;
  font-size: 13px;
`;

export const Actions = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Cta = styled(Button)``;

export const Note = styled.div`
  margin-top: 20px;
  font-size: 14px;
  background-color: #f4f4f4;
  padding: 10px 20px;
  border-left: 4px solid #888;

  span {
    font-weight: bold;
  }
`;
