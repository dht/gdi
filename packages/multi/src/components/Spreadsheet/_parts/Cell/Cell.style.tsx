import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  line-height: 30px;
  border-bottom: 1px solid var(--grid);
  border-right: 1px solid var(--grid);
  display: flex;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 200px;
  white-space: nowrap;
  padding: 0 7px;

  &.virtual {
    opacity: 0.64;
    color: pink;
  }

  &.first {
    background-color: #111;
  }

  &.number {
    flex-direction: row-reverse;
  }

  &.date {
    justify-content: center;
  }

  &.header {
    font-weight: 500;
    background-color: #112;
  }

  &.firstCol {
    background-color: #112;
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
`;
