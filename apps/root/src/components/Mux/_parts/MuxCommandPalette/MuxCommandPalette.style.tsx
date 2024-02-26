import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 20px;
  padding: 10px 8px 10px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  position: relative;
  left: -5px;
  width: 105%;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 14px;
  max-width: 70%;
  outline: none;
`;

export const Key = styled.div`
  font-size: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 5px 6px;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.5);
`;
