import styled from 'styled-components';
import { Container as ContainerBase } from '../../../base.style';

export const Wrapper = styled.div`
  padding: 15px 0 0;
  position: sticky;
  top: 73px;
  background-color: white;
  z-index: 4999;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  @media (max-width: 800px) {
    top: 65px;
  }
`;

export const Container = styled(ContainerBase)`
  max-width: calc(100vw - 50px);
  box-sizing: border-box;
`;

export const Items = styled.div`
  max-width: calc(100vw - 160px);
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;

  @media (max-width: 800px) {
    max-width: calc(100vw - 20px);
    padding: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
  opacity: 0.8;
  margin: 0 6px;
  cursor: pointer;

  @media (max-width: 800px) {
    height: 60px;
    margin: 0;
  }

  &:hover,
  &.selected {
    opacity: 1;

    .title {
      font-weight: bold;
      padding-left: 0;
      padding-right: 0;
      letter-spacing: -0.1px;
    }
  }

  &:hover {
    .title {
      border-bottom-color: #aab;
    }
  }

  &.selected {
    .title {
      border-bottom-color: #334;
    }
  }

  svg {
    stroke-width: 1.5;
  }
`;

export const Image = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    height: 30px;
  }
`;

export const Title = styled.div`
  font-size: 14px;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  padding: 0 0 10px;

  @media (max-width: 800px) {
    padding: 0 0 5px;
    font-size: 12px;
  }
`;

export const Line = styled.div`
  height: 0;
  background-color: #ccc;
`;
