import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 32px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Command = styled.div`
  outline: none;
  background-color: white;
  padding: 10px 20px;
  box-shadow: inset 0 0 0 1px #ddd;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }

  &:active {
    background-color: #eee;
  }

  @media (max-width: 800px) {
    padding: 10px;
    text-align: center;
    font-size: 12px;
  }
`;
