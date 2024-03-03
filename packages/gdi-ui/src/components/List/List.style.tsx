import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  font-size: 14px;
  color: #223;
  position: relative;
  max-height: calc(100vh - 200px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  --color: #222;
  --bk: #eee;
  --scroll-bk: #ddd;
  --scroll-thumb: #aaa;
  --cursor-bk: gold;
  --cursor-color: #111;
  --header-bk: white;
  --hover-bk: #61616138;
  --path: #eef;
  --odd-bk: rgba(0, 0, 0, 0.4);

  &.dark {
    --color: #ccc;
    --bk: #111115;
    --scroll-bk: #222227;
    --scroll-thumb: rgba(255, 255, 255, 0.05);
    --cursor-bk: #429292;
    --cursor-color: #fff;
    --header-bk: rgba(255, 255, 255, 0.1);
    --hover-bk: #61616138;
    --odd-bk: rgba(255, 255, 255, 0.03);
    --path: goldenrod;
  }

  background-color: var(--bk);
  color: var(--color);

  ::-webkit-scrollbar-track {
    background: var(--scroll-bk);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--scroll-thumb);
  }

  &.focused {
    .item {
      &.focused {
        color: var(--cursor-color);
        background-color: var(--cursor-bk);
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
  color: var(--path);
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
    background-color: var(--header-bk);
  }

  &.odd {
    background-color: var(--odd-bk);
  }

  &.focused {
    background-color: var(--hover-bk);
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
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--bk);
  padding: 5px 12px;
  border-radius: 10px;

  span {
    color: #aab;
  }
`;
