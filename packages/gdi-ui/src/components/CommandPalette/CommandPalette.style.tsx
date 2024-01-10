import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  z-index: 115;
`;

export const Bar = styled.div`
  background-color: #223;
  box-shadow: 0 0 3px 7px rgba(0, 0, 0, 0.15);
  color: #eee;
  margin-top: 200px;
  height: 61px;
  width: 1000px;
  padding: 10px;
  display: flex;
  position: relative;
`;
