import styled from 'styled-components';

export const Wrapper = styled.div<{ $width?: number; $padding?: number }>`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: ${(props) => (props.$width ? props.$width + 'px' : 'auto')};
  padding: ${(props) => props.$padding ?? 0}px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column = styled.div<{ $flex?: number }>`
  flex: ${(props) => props.$flex ?? 1};
  padding: 0;
`;
