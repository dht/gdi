import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Stars = styled.div`
  position: relative;
  width: 150rem;
  height: 30rem;
`;

export const Star = styled.div``;

export const Empty = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Full = styled.div`
  color: gold;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 50rem;
  overflow: hidden;
  flex-direction: row;
  align-items: center;
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
`;

export const Votes = styled.div`
  margin-top: 5rem;
  margin-left: 10rem;
  height: 30rem;
  line-height: 30rem;
  opacity: 0.5;
  font-size: 16rem;
`;
