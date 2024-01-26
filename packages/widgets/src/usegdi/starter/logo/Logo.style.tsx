import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
  max-height: 100px;
  z-index: 999;
`;

export const Image = styled.img`
  width: 300rem;
`;

export const Version = styled.div`
  position: absolute;
  font-size: 15rem;
  opacity: 0.2;
  top: 5rem;
  left: 210rem;
  cursor: pointer;

  &:hover {
    opacity: 1;
    color: palegoldenrod;
  }
`;

export const Github = styled.img`
  width: 25rem;
  position: absolute;
  top: 0rem;
  left: 270rem;
`;

export const A = styled.a``;
