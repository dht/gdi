import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  padding: 24px 35px;
  font-size: 16px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  line-height: 2;
  padding: 6px 10px;

  &:nth-child(odd) {
    border-radius: 1px;
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const Key = styled.div`
  font-weight: 500;
  opacity: 0.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Value = styled.div`
  max-width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  // max rows : 10
  max-height: 200px;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
`;
