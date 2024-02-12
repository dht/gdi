import styled from 'styled-components';
import Button from '../Button/Button';

export const Wrapper = styled.div`
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  width: 1080px;
  position: relative;
  margin: 0 auto 20px;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`;

export const Gap = styled.div`
  flex: 1;
`;

export const Tip = styled.div`
  position: fixed;
  bottom: 60px;
  right: 30px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Actions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  &:first-child {
    justify-content: flex-start;
  }

  @media (max-width: 800px) {
    position: absolute;
    left: 10px;
    top: 5px;
    border: 1px solid #445;
  }
`;

export const Nav = styled(Button)``;
