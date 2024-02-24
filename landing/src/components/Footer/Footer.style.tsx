import styled from 'styled-components';
import Container from '../Container/Container';

export const Wrapper = styled.div`
  flex: 1;
  font-size: 20px;
  color: white;
  box-shadow: 0 -5px 10px 1px #ffffff13;
  margin-top: 50px;
`;

export const Inner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 800px;
  font-size: 14px;
  padding: 50px 0;

  @media (max-width: 768px) {
    max-width: 70vw;
  }
`;

export const Group = styled.div``;

export const GroupTitle = styled.div`
  padding: 8px 0 12px;
`;

export const Items = styled.div``;

export const Item = styled.a`
  padding: 8px 0;
  color: rgba(255, 255, 255, 0.6);
  display: block;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;
