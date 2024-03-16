import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #999;
  outline: none;
  color: #eee;

  &:focus {
    border-color: gold;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
  cursor: pointer;
  color: #aaa;

  &:hover {
    color: gold;
  }
`;
