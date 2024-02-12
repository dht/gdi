import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Client = styled.div`
  width: 20px;
  height: 20px;
  margin: 5px;
  background-size: cover;
  filter: grayscale(100%);
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
`;
