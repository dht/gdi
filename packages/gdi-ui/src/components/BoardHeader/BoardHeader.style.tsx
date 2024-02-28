import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-left: 110px;
  font-size: 15px;
  z-index: 2;
  color: #333;
  text-align: center;
  background-color: gold;
  font-size: 14px;
  font-weight: 500;
  padding: 3px 24px 5px 44px;
  border-radius: 0 0 15px 15px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 800px) {
    background-color: #232;
    color: #565;
  }
`;

export const ToHome = styled.div`
  position: absolute;
  left: 12px;
  top: 0;
  cursor: pointer;

  &:hover {
    color: palevioletred;
  }
`;
