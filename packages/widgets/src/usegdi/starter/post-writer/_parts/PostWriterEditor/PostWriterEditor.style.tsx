import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;

  &.focused {
    border-color: #445;
  }
`;

export const Input = styled.textarea`
  margin: 10px;
  padding: 10px;
  color: #aaa;
  line-height: 1.5;
  flex: 1;
  font-size: 18px;
  background-color: transparent;
  border: none;

  &:focus {
    outline: 1px solid #334;
  }
`;

export const InstructionsInput = styled.input`
  background-color: transparent;
  border: none;
  margin: 10px 10px -10px 10px;
  border-bottom: 1px solid #333;
  font-size: 16px;
  color: #aaa;
  padding: 5px 0;
  outline: none;
  flex: 1;

  &:focus {
    border-bottom: 1px solid #555;
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  position: relative;
`;

export const Count = styled.div`
  position: absolute;
  bottom: 7px;
  right: 7px;
  background-color: #000;
  width: 20px;
  text-align: center;
  padding: 3px;
  font-size: 13px;
`;

export const Label = styled.div`
  position: absolute;
  bottom: 7px;
  left: 7px;
  background-color: #000;
  width: 20px;
  text-align: center;
  padding: 3px;
  font-size: 13px;
  background-color: #333;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Actions = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Cta = styled.button`
  background-color: transparent;
  color: #777;
  border: 1px solid #333;
  margin-left: 4px;
  cursor: pointer;

  &:hover {
    color: #aaa;
    border-color: #555;
  }

  &:active {
    top: 9px;
  }
`;

export const Progress = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 255, 0, 0.1);
`;
