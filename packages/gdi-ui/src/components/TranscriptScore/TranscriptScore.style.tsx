import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BottomLine = styled.div`
  font-size: 40px;
  border: 2px solid gold;
  padding: 10px 15px;
  border-radius: 10px;
  color: gold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 15px;
  color: gold;
  margin-bottom: 5px;
  display: block;
`;

export const Table = styled.div`
  padding: 10px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &:nth-child(1) {
    color: #53b2ea;
  }

  &:nth-child(2) {
    color: #e69d00;
  }

  &:nth-child(3) {
    color: #df5353;
  }

  &:nth-child(4) {
    color: gray;
  }
`;

export const Key = styled.div`
  font-size: 15px;
  margin-left: 10px;
  max-width: 100px;
`;

export const Value = styled.div`
  width: 30px;
  text-align: right;
`;
