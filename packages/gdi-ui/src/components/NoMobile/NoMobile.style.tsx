import styled from 'styled-components';
import Button from '../Button/Button';

export const Wrapper = styled.div`
  flex: 1;
  font-size: 30rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30rem;
  line-height: 1.5;
  color: #37474f;
`;

export const H3 = styled.h3`
  margin: 20px 0 10px;
`;

export const P = styled.p`
  font-size: 20px;
  color: #37474f;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    font-size: 26px;
    margin-left: 7px;
  }
`;

export const Cta = styled(Button)`
  margin-top: 20px;
  zoom: 1.2;
  color: black;
  font-weight: bold;
  border: 2px solid #fb6d00;
  background-color: #ff6f00;

  &:hover {
    background-color: #ff8f00;
  }
`;
