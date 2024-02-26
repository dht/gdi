import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  margin-top: 20px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 5px;
  color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  &.selected {
    color: #fff;
  }
`;

export const Title = styled.div`
  margin-left: 3px;
  font-size: 18px;
`;
