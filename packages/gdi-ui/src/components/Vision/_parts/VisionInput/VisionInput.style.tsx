import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: inset -1px -1px 1px rgba(255, 255, 255, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.2);

  .Icon-wrapper {
    color: rgba(255, 255, 255, 0.5);
    font-size: 21px;
    padding: 0;
  }

  &.address-bar {
    input {
      &::placeholder {
        font-size: 15px;
        color: #eee;
        opacity: 0.8;
        text-align: center;
      }
    }
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  font-size: 14px;
  flex: 1;

  &::placeholder {
    color: #aaa;
    opacity: 0.5;
  }
`;
