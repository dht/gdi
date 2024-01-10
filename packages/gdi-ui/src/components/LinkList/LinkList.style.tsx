import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  height: 400rem;
  overflow-y: auto;
  border: 1px solid gray;
  border-bottom: none;
  width: 750rem;
`;

export const Link = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8rem 20rem;
  background-color: #f9f9f9;
  font-size: 16rem;
  cursor: pointer;

  &:nth-child(odd) {
    background-color: #f3f3f3;
  }

  &:hover {
    background-color: #eee;
  }

  &:last-child {
    margin-bottom: 30rem;
  }
`;

export const Id = styled.div`
  width: 90rem;
`;

export const Title = styled.div`
  width: 200rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Description = styled.div`
  flex: 1;
  padding-left: 10rem;
  width: 500rem;
  line-height: 1.5;
`;

export const Empty = styled.div`
  opacity: 0.5;
  font-size: 16rem;
  padding: 180rem 20rem;
  text-align: center;
`;
