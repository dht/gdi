import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  font-size: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  font-size: 14px;
  border-radius: 5px;
  box-shadow: inset 0 0 10px #00000055;
  max-width: 320px;
  float: right;
  margin-right: 30px;
  position: relative;

  span {
    background-color: pink;
    font-weight: 600;
  }

  > .icon {
    background-color: transparent;
    position: absolute;
    top: -11px;
    right: -11px;
    color: palevioletred;
    font-weight: bold;
    font-size: 30px;
    background-color: gold;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
