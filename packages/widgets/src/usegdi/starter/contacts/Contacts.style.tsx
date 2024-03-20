import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;
  max-height: calc(100vh - 220px);
  overflow-y: auto;
`;

export const Icon = styled.div`
  margin-right: 10px;
  cursor: pointer;
  color: #aaa;

  &:hover {
    color: gold;
  }
`;
