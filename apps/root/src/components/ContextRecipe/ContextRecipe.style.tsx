import styled from 'styled-components';
import { Button } from '@gdi/ui';

export const Wrapper = styled.div`
  flex: 1;
  padding: 20px;
  color: #ddd;
`;

export const H2 = styled.h2`
  font-size: 22px;
  font-weight: 100;
  border-bottom: 4px solid #888;
  display: inline-block;
  padding-bottom: 10px;
`;

export const H3 = styled.h3`
  font-size: 18px;
  font-weight: 100;
`;

export const Ul = styled.ul``;

export const Li = styled.li`
  line-height: 1.6;
`;

export const Ol = styled.ol``;

export const Cta = styled(Button)`
  margin: 50px auto 10px;
  background-color: purple;
  color: #ddd;

  &:hover {
    background-color: #b000b0;
  }
`;
