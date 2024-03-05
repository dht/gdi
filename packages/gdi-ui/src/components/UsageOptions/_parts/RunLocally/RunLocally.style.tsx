import styled from 'styled-components';
import Button from '../../../Button/Button';

export const Wrapper = styled.div`
  flex: 1;
  max-width: 500px;
  padding-top: 20px;
`;

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
