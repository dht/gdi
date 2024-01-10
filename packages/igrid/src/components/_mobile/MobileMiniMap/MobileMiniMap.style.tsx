import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: fixed;
  top: 15px;
  right: 10px;
  border: 1px solid #333;
  overflow: hidden;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: white;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    background-color: palevioletred;
    z-index: -1;
    transition: transform 0.25s cubic-bezier(0.2, 0, 0, 1);
  }
`;

export const Screen = styled.div`
  flex: 1;
  font-size: 30px;
  color: #333;
  height: 50px;
  border: 1px solid #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
