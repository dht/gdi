import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  position: relative;
  overflow: auto;
  height: 10px;
`;

export const Expander = styled.div`
  width: 0;
  background-color: pink;
  height: 10px;
`;

export const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  opacity: 0;
  transition: opacity 200ms ease-out;

  &.on {
    opacity: 1;
  }
`;
