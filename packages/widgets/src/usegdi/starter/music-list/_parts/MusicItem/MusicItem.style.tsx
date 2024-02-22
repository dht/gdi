import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  color: #aaa;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:nth-child(odd) {
    background-color: #181818;
  }

  &:hover {
    background-color: #222;
    cursor: pointer;

    .name {
      color: palevioletred;
    }
  }

  &.selected {
    background-color: #222;

    .name {
      color: gold;
    }
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 20px;
  background-size: cover;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const Name = styled.div`
  padding-left: 10px;
`;

export const By = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-left: 4px;
  font-size: 12px;
`;

export const Author = styled.a`
  margin-left: 4px;
  color: goldenrod;
`;
