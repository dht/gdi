import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #010;
  overflow-y: auto;
  font-size: 16px;
  color: #aba;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 10px;
  border-bottom: 1px solid #232323;
  color: #aba;

  &:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .type {
    font-size: 16px;
  }

  .data {
    font-size: 16px;
  }
`;

export const Scope = styled.div`
  color: palevioletred;
  margin-right: 7px;
`;

export const Message = styled.div`
  flex: 1;
`;

export const Data = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Timestamp = styled.div`
  color: gold;
`;

export const Index = styled.div`
  color: brown;
  width: 30px;
  text-align: center;
  margin-right: 5px;
`;

export const LogButton = styled.div`
  position: fixed;
  z-index: 999999;
  top: 21px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 5px;
  padding: 5px;
  color: #676;
  opacity: 0;
  display: none;
`;
