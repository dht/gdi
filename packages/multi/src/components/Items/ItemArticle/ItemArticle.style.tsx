import styled from 'styled-components';

export const Details = styled.div`
  flex: 1;
  padding: 15rem 15px;
  background-color: #223;
  color: #bbb;
  height: 135px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.a`
  font-size: 20px;
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
  font-size: 14px;
  margin-top: 4px;
  text-transform: uppercase;
  font-variation-settings: 'wdth' 75, 'wght' 450;
`;

export const AuthorName = styled.div`
  color: #d2126b;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: #970a4c;
  }
`;

export const Description = styled.div`
  flex: 1;
  font-size: 20px;
  line-height: 30px;
  min-height: 60px;
  margin-top: 5px;
`;
