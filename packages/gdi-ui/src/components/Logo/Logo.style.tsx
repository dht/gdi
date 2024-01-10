import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Image = styled.img<{ $size: number }>`
  height: ${(props) => props.$size}px;
`;
