import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  max-height: 100px;
  margin: auto;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Input = styled.textarea`
  background-color: transparent;
  border: 1px solid #9b9b9b;
  font-size: 16px;
  height: 52px;
  padding: 16px 48px 12px 16px;
  overflow-y: hidden;
  border-radius: 15px;
  width: 766px;
  box-sizing: border-box;
  resize: none;
  outline: none;
  color: #fff;
`;

export const Send = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 9px;
  top: 8px;
  border-radius: 20%;
  outline: none;
  border: none;
  background-color: #444;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: #444;
    color: #222;
    pointer-events: none;
  }
`;
