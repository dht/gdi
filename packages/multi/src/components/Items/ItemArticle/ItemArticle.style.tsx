import styled from 'styled-components';

export const Details = styled.div`
  flex: 1;
  padding: 15rem 15rem;
  background-color: #223;
  color: #bbb;
  height: 135rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.a`
  font-size: 20rem;
  font-weight: 500;
  cursor: pointer;
  color: white;
  font-variation-settings: 'wdth' 80, 'wght' 650;

  &:hover {
    color: #d2126b;
  }
`;

export const Author = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14rem;
  margin-top: 4rem;
  text-transform: uppercase;
  font-variation-settings: 'wdth' 75, 'wght' 450;
`;

export const AuthorName = styled.div`
  color: #d2126b;
  margin-left: 5rem;
  cursor: pointer;

  &:hover {
    color: #970a4c;
  }
`;

export const Description = styled.div`
  flex: 1;
  font-size: 20rem;
  line-height: 30rem;
  min-height: 60rem;
  margin-top: 5rem;
`;
