import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  box-shadow: inset 0 0 5px #e5e5e5;
  text-align: center;
  height: 24px;
  line-height: 24px;
  font-size: 14px;

  &.weekend {
    color: #9a9a9a;
  }

  &.notInMonth {
    color: #ececec;
  }

  &.today {
    background-color: palevioletred;
    color: white;
  }
`;
