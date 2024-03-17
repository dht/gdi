import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 10px 0 3px;
  font-size: 17px;
  height: 20px;
`;

export const Subtitle = styled.h3`
  margin: 0 0;
  font-weight: 100;
  opacity: 0.5;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 250px;
  text-align: center;
  height: 18px;
`;
