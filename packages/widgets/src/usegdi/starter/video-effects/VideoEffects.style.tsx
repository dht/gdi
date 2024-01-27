import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  background-color: #111;
  font-size: 18px;
  padding: 20px;
`;

export const H2 = styled.h2`
  color: white;
  font-weight: 100;
  padding: 0;
  margin: 0;
  font-size: 20px;
  border-bottom: 1px solid #353;
  padding: 0 0 15px;
`;

export const Items = styled.div``;

export const Effect = styled.div`
  float: left;
  width: 125px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #353;
  border-bottom: 1px solid #353;
  padding: 12px 0;
  text-align: center;

  &:nth-child(5n) {
    border-right: none;
  }
`;

export const Text = styled.div`
  margin-top: 8px;
  font-size: 13px;
`;
