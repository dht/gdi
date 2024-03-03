import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
`;

export const Field = styled.div`
  margin: 5px;
  background-color: rgba(255, 255, 255, 0.05);
  text-align: center;
  max-height: 45px;
  border-radius: 10px;
  padding: 4px;
  width: 90px;
`;

export const Label = styled.label`
  color: rgba(255, 255, 255, 0.4);
`;

export const Value = styled.div`
  font-size: 16px;
  padding: 5px;
`;
