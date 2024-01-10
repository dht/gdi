import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  left: calc(min(1700px, 100vw) / 2);
  transform: translateX(-50%);
  width: 142px;
  font-size: 15px;
  color: #333;
  text-align: center;
  background-color: gold;
  font-size: 14px;
  font-weight: 500;
  padding: 3px 10px 5px;
  border-radius: 0 0 15px 15px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
`;
