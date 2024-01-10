import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: fixed;
  top: 43px;
  left: 0;
  min-width: 200px;
  background-color: white;
  z-index: 9999;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 10px 0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 15px;
  position: relative;

  &:hover {
    background-color: #f3f3f3;
    color: palevioletred;
  }

  &.divider {
    margin-bottom: 10px;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      background-color: #eee;
      bottom: -5px;
    }
  }
`;
