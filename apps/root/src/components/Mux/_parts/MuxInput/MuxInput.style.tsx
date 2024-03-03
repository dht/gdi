import styled from 'styled-components';
import { Button } from '@gdi/ui';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 766px;
  max-width: calc(100% - 180px);
`;

export const Input = styled.textarea`
  background-color: transparent;
  border: 1px solid #444;
  font-size: 16px;
  height: 52px;
  padding: 16px 48px 12px 16px;
  overflow-y: hidden;
  border-radius: 15px;
  width: 100%;
  box-sizing: border-box;
  resize: none;
  outline: none;
  color: #bbb;

  &:focus {
    border-color: #667;
  }
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
  color: #eee;
  cursor: pointer;

  &:disabled {
    background-color: #444;
    color: #222;
    pointer-events: none;
  }
`;

export const Clear = styled(Button)`
  width: 35px;
  position: absolute;
  top: 5px;
  right: -90px;
  width: 70px;
  text-align: center;
  color: #aaa;

  &:active {
    position: absolute;
    top: 5px;
  }
`;
