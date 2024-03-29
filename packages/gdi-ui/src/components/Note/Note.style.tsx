import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  padding: 20px;
  position: relative;
  border-radius: 5px;

  @media (max-width: 800px) {
    max-width: 85vw;
  }

  &.green {
    background-color: #e2ffe2;
  }

  &.yellow {
    background-color: rgba(255, 243, 167, 0.623);

    &.dark {
      background-color: rgba(255, 255, 255, 0.05);
    }
  }

  a {
    color: dodgerblue;
  }

  p {
    font-size: 16px;
    line-height: 22px;
    padding: 0;
    margin: 0;
  }

  ol {
    margin: 10px 0 0;
    padding-bottom: 0;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const H3 = styled.h3`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 21px;
  font-weight: 400;

  .icon {
    padding-right: 4px;
  }
`;
