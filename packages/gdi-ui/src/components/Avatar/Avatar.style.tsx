import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  background-color: #eee;
  border-radius: 50%;
  background-size: cover;
  position: relative;
  display: block;
  display: flex;
`;

export const Badge = styled.div`
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -7px;
  right: -7px;
`;

export const Inner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-size: cover;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;
`;
