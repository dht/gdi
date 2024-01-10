import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  font-size: 20px;
  width: 400px;
  margin: 100px auto;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const List = styled.div``;

export const Todo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:nth-child(odd) {
    background-color: #eee;
  }
`;

export const TodoTitle = styled.div`
  flex: 1;
`;

export const TodoCheckbox = styled.input``;

export const TodoActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > button {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  font-size: 13px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
`;
