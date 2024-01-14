import { Input } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 20rem;
  background-color: rgba(255, 255, 255, 0.05);
  font-size: 15px;
  align-self: flex-end;
`;

export const FileName = styled(Input)`
  margin-right: 10px;
`;
