import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  width: 1280px;
  margin: auto;
  position: relative;
  margin-bottom: 20px;

  @media (max-width: 1440px) {
    width: 1204px;
  }

  @media (max-width: 1280px) {
    width: 1064px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;
