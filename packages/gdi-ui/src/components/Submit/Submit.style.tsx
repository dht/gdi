import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  /* margin-top: 10px; */
  padding-top: 16px;
  /* border-top: 1px solid #e5e5e5; */
`;

export const Cancel = styled.div`
  margin-right: 10px;
`;

export const CircularProgress = styled.div<{ size?: number }>``;
