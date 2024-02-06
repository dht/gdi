import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 30px;
  overflow: hidden;
  user-select: none;
`;

export const Option = styled.div`
  padding: 10px;
  border-right: 1px solid #e0e0e0;
  cursor: pointer;
  text-transform: capitalize;

  &:first-child {
    padding-left: 20px;
  }

  &:hover {
    background-color: #e0e0e0;
  }

  &.selected {
    background-color: #eccfd4;
  }

  &:last-child {
    padding-right: 20px;
    border-right: none;
  }
`;
