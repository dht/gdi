import styled from 'styled-components';
import { Container } from '@gdi/ui';

export const Wrapper = styled(Container)`
  flex: 1;
  display: flex;
  color: white;
  font-size: 14px;
  flex-direction: column;
  background-color: var(--color-bk);
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  position: relative;

  &:last-child {
    max-width: 300px;
    --aug-tl: 25px;
    --aug-bl: 57px;
    --aug-border-all: 3px;
    --aug-inlay-all: 3px;
    --aug-inlay-bg: #000;
    /* background: linear-gradient(rgb(84, 199, 84), rgb(85, 125, 85)); */
    /* color: rgb(84, 199, 84); */

    @media (max-width: 800px) {
      display: none;
    }
  }
`;

export const Inner = styled.div`
  padding: 20px;
  flex: 1;
  overflow-y: auto;
  padding-bottom: 83px;
  max-height: 0;
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 10px;
  background-color: #111115;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;
