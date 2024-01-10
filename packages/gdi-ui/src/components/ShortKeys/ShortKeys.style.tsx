import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: table;
  margin: 20rem;
  box-sizing: border-box;
  font-size: 20rem;
  width: calc(100% - 40rem);
`;

export const Body = styled.div`
  display: table-row-group;
`;

export const TR = styled.div`
  display: table-row;

  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

export const TD = styled.div`
  display: table-cell;
  padding: 10rem;

  &:first-child {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    width: 50rem;
    text-align: center;
  }
`;

export const Modifier = styled.span`
  font-size: 26rem;
  position: relative;
  top: 3rem;
  color: rgba(0, 0, 0, 0.5);
`;
