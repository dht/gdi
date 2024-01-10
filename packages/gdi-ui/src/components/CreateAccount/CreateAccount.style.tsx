import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  width: 600rem;
  padding: 20px;

  @media (max-width: 800px) {
    width: 80vw;
    padding: 0;
  }
`;

export const P = styled.p`
  font-size: 16px;
  line-height: 22px;

  span {
    text-decoration: underline;
  }
`;

export const Ol = styled.ol`
  margin: 10px 0 0;
  padding-bottom: 50px;
  column-count: 2;
  line-height: 1.5;

  @media (max-width: 800px) {
    column-count: 1;
  }
`;
