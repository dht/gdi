import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  font-size: 14px;
  color: #223;
  background-color: #eee;
  position: relative;
  max-height: calc(100vh - 200px);

  ::-webkit-scrollbar-track {
    background: #ddd;
  }

  ::-webkit-scrollbar-thumb {
    background: #aaa;
  }

  &.focused {
    .item {
      &.focused {
        background-color: gold;
      }
    }
  }
`;

export const Top = styled.div`
  height: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px;
  background-color: rgba(0, 0, 0, 0.4);
  color: #eef;
  font-size: 18px;
`;

export const Root = styled.div``;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 30px;
  line-height: 30px;

  &.header {
    padding-right: 5px;
    background-color: white;
  }

  &.odd {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &.focused {
    background-color: #61616138;
  }
`;

export const Cell = styled.div`
  flex: 1;
  padding: 0 10px;
  user-select: none;

  &.header {
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }

  .icon {
    font-size: 22px;
    margin-top: 4px;
    margin-left: 4px;
  }
`;

export const Q = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 5px 12px;
  border-radius: 10px;

  span {
    color: #aab;
  }
`;
