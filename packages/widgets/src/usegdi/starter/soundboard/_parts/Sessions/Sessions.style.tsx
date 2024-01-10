import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 300px;
  color: #99a;
  font-size: 20rem;
  border-top: 5rem solid rgba(0, 0, 0, 0.4);
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;

  > div {
    padding: 10rem;
  }
`;

export const Time = styled.div`
  margin-left: 15rem;
`;

export const Name = styled.div`
  flex: 1;
`;

export const Duration = styled.div``;

export const Actions = styled.div``;

export const Action = styled.div`
  cursor: pointer;
`;
