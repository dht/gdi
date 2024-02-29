import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 32px;
  padding: 0 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  position: relative;
  justify-content: center;
  user-select: none;
  cursor: pointer;

  &.darkMode {
    background-color: #111115;
    border-color: #334;
    color: #aaa;
  }

  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }

  .Avatar-wrapper {
    margin-left: 6px;
  }
`;
