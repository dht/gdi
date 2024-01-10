import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.04);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Field = styled.div`
  padding: 5px;
`;

export const Key = styled.div``;

export const Value = styled.div`
  margin-top: 5px;
  background-color: rgba(255, 255, 255, 0.04);
  height: 20px;
  border-radius: 10px;
  max-width: 160px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
