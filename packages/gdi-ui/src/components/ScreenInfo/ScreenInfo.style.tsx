import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: black;
  width: 450rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20rem;
  color: #999;
  position: relative;
`;

export const LineHorizontal = styled.div`
  position: absolute;
  left: 25rem;
  width: 400rem;
  height: 1rem;
  top: 15rem;
  border-top: 1rem dashed #999;

  &:after {
    content: '>';
    position: absolute;
    right: -10rem;
    top: -13rem;
  }
`;

export const LineVertical = styled.div<{ size: number }>`
  position: absolute;
  left: 25rem;
  border-top: 1rem dashed #999;
  top: 15rem;
  width: calc(${(props) => props.size}rem - 50rem);
  transform-origin: 0 0;
  transform: rotate(90deg);

  &:after {
    content: '>';
    position: absolute;
    right: -10rem;
    top: -13rem;
  }
`;

export const Size = styled.div``;
