import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  user-select: none;
`;

export const Item = styled.div`
  width: 83px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  margin: 1px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Icon = styled.div``;

export const Title = styled.div`
  font-size: 11px;
  color: #aaa;
  margin-top: 2px;
`;
