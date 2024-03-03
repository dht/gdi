import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  max-width: 220px;
  margin: 7px;
`;

export const MonthHeader = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  margin-bottom: 5px;
`;

export const WeekDays = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WeekDay = styled.div`
  width: 40px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;
