import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  font-size: 24rem;
`;

export const Activity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10rem 30rem;
  color: #eee;

  input {
    color: #eee;
  }

  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  &.selected {
    background-color: gold;
    color: #334;

    .stats {
      display: block;
    }

    input {
      color: #334;
    }
  }
`;

export const Color = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  width: 20rem;
  height: 20rem;
  border-radius: 5rem;
  border: 1px solid #334;
`;

export const Name = styled.div`
  width: 220rem;
  margin-left: 20rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Flex = styled.div`
  flex: 1;
`;

export const Time = styled.input`
  width: 120rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #aaa;
  text-align: center;
`;

export const Stats = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  display: none;
`;

export const Stat = styled.div``;
