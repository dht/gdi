import { Button } from '@gdi/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #334;
  font-size: 20px;
  color: #dde;
`;

export const Cta = styled(Button)``;

export const Suggestion = styled.div`
  padding: 10rem 20rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:nth-child(2n-1) {
    background-color: rgba(255, 255, 255, 0.05);
  }

  &:hover {
    color: gold;
  }

  .icon {
    font-size: 32rem;
    margin-right: 20px;
  }
`;

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: 3px;
`;

export const Description = styled.div<{ $width: number }>`
  font-size: 13px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #bbc;
  max-width: ${({ $width }) => $width}px;
`;

export const Column = styled.div``;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20rem;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div``;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Suggestions = styled.div<{ $height: number }>`
  flex: 1;
  overflow: auto;
  height: ${({ $height }) => $height}px;
`;
