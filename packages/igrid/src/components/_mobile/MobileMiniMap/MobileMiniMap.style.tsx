import styled from 'styled-components';

export const Wrapper = styled.div<{ $count: number; $columnIndex: number }>`
  width: ${(props) => props.$count * 30}px;
  overflow: hidden;
  height: 30px;
  border: 1px solid #333;
  border-radius: 5px;
  position: relative;

  &:before {
    content: '';
    background-color: white;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -2;
  }

  .inner {
    &:before {
      left: ${(props) => props.$columnIndex * 30}px;
    }
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background-color: palevioletred;
    z-index: -1;
    transition: transform 0.25s cubic-bezier(0.2, 0, 0, 1);
  }
`;

export const Screen = styled.div`
  flex: 1;
  font-size: 20px;
  color: #333;
  height: 30px;
  border: 1px solid #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
