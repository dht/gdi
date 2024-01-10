import styled from 'styled-components';

export const Description = styled.div`
  flex: 1;
  padding: 20px;
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

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  margin-top: 5px;
  text-transform: uppercase;
  font-variation-settings: 'wdth' 75, 'wght' 450;
`;

export const LocationName = styled.div`
  color: #d2126b;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: #970a4c;
  }
`;

export const Time = styled.div`
  font-weight: 500;
  color: gold;
  padding: 0 5px;
  background-color: black;
  font-size: 17px;
  float: right;
`;
