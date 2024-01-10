import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Arrow = styled.div`
  position: fixed;
  top: 50%;
  width: 50px;
  height: 50px;
  background-color: red;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #112;
  box-sizing: border-box;

  svg {
    fill: #667;
  }

  &.left {
    left: 0;
    border-radius: 0 25px 25px 0;
    padding-left: 5px;
  }

  &.right {
    right: 0;
    border-radius: 25px 0 0 25px;
    padding-left: 12px;
  }
`;
