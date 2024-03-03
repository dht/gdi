import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  font-size: 15px;
  z-index: 2;
  color: #ccc;
  text-align: center;
  background-color: var(--color-bk);
  border-right: 1px solid var(--color-border);
  border-top: 1px solid var(--color-border);
  font-size: 14px;
  font-weight: 500;
  padding: 7px 20px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 0 10px 0 0;

  @media (max-width: 800px) {
    background-color: #232;
    color: #565;
  }
`;
