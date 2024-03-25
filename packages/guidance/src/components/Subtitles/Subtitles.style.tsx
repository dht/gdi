import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: fixed;
  bottom: 150px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Line = styled.div`
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 2px;
  padding: 2px 15px;
  font-size: 34px;
  line-height: 1.3;
  color: #ffe554;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
`;
