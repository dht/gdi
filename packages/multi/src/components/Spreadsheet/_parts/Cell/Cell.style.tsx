import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  line-height: 30px;
  padding: 0 5px;

  &.model {
    background-color: #f5f5f5;
    font-weight: 500;
    text-align: center;
  }

  &.temperature {
    text-align: center;
  }

  &.topP {
    text-align: center;
  }

  &.maxTokens {
    border-bottom: 1px solid #000;
    text-align: center;
  }

  &.firstCol {
    background-color: #f5f5f5;
    text-align: center;
  }

  &.loading,
  &.empty {
    text-align: center;
  }

  &.value {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &.prompt {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
