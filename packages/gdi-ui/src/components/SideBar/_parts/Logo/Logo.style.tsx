import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-right: 30px;
  cursor: pointer;

  &.minimal {
    max-width: 15px;
    min-width: 15px;
    overflow: hidden;
    margin-right: 0;
    margin-left: 2px;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 30px;

  @media (max-width: 768px) {
    width: 30px;
  }
`;
