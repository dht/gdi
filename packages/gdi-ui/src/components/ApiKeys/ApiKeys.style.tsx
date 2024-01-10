import styled from 'styled-components';
import Button from '../Button/Button';

export const Wrapper = styled(Button)``;

export const Badge = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: -5px;
  right: -7px;
  border-radius: 50%;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &.ok {
    background-color: green;
  }

  &.warning {
    background-color: orangered;
  }

  span {
    font-size: 18px;
  }
`;
