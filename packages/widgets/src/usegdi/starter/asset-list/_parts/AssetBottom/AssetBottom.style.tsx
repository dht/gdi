import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 32px;
  background-color: var(--bk);
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  bottom: 2px;
`;

export const Command = styled.div`
  outline: none;
  background-color: var(--bk);
  padding: 10px 20px;
  box-shadow: inset 0 0 0 1px var(--scroll-bk);
  color: var(--color);
  cursor: pointer;

  &:hover {
    background-color: var(--hover-bk);
  }

  &:active {
    background-color: var(--scroll-bk);
  }

  @media (max-width: 800px) {
    padding: 10px;
    text-align: center;
    font-size: 12px;
  }
`;
