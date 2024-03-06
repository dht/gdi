import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 42px;
  text-align: center;

  span {
    color: #ff6397;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 35px;
    text-align: left;
  }
`;
