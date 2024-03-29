import styled from 'styled-components';
import Container from '../Container/Container';

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 110px;

  @media (max-width: 768px) {
    max-height: 80px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.a`
  color: rgba(255, 255, 255, 0.6);
  margin: 0 15px;
  font-size: 15px;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

export const ActionItem = styled.div``;

export const Cta = styled.a`
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
`;
