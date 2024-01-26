import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  max-width: 180px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Timestamp = styled.div`
  color: gray;
  border-radius: 10px;
  padding: 5px;
  font-size: 18px;
  width: 60px;
  background-color: #000;
  text-align: center;
  border: 1px solid #334;
  position: relative;

  span {
    margin-left: 3px;
    font-size: 14px;
  }

  &:nth-child(2) {
    zoom: 1.3;
    color: pink;
    top: -3px;
    z-index: 999;
  }

  &:nth-child(1) {
    top: 4px;
  }

  &:nth-child(3) {
    bottom: 10px;
  }
`;
