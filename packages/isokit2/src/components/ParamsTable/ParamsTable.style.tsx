import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  padding: 10px;
  font-size: 16px;

  &.wide {
    .pair {
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;
      padding: 3px 0;
    }

    .key {
      padding: 0;
      font-size: 11px;
      margin: 0;
    }

    .value {
      text-align: center;
      width: 110px;
      word-break: break-all;
      font-size: 14px;
      padding: 0;
      margin: 0;
    }
  }
`;

export const Row = styled.div`
  padding: 6px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:nth-child(odd) {
    border-radius: 1px;
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const Key = styled.div`
  font-weight: 500;
  opacity: 0.5;
  overflow: hidden;
  padding: 3px;
  margin: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  cursor: pointer;

  &:hover {
    background-color: #121;
  }
`;

export const Value = styled.div`
  text-align: right;
  flex: 2;
  margin: 2px;
  padding: 3px;
  cursor: pointer;

  &:hover {
    background-color: #121;
  }
`;

export const Id = styled.div`
  max-width: 120px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  padding: 2px 0;
  border-radius: 10px;

  &:hover {
    background-color: #121;
  }
`;
