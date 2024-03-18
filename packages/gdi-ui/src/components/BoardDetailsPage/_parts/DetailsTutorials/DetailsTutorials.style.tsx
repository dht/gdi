import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  margin-bottom: 50px;
`;

export const H2 = styled.h2`
  font-weight: 500;
  font-size: 22px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Tutorial = styled.div`
  margin: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;

    .title {
      border-bottom: 2px solid palevioletred;
    }
  }
`;

export const Image = styled.div`
  width: 200px;
  height: 150px;
  background-size: cover;
  border-radius: 5px;
`;

export const Title = styled.div`
  display: inline-block;
  margin-top: 5px;
  font-size: 15px;
  border-bottom: 2px solid transparent;
`;

export const Subtitle = styled.div`
  font-size: 13px;
  color: #777;
  margin-top: 4px;
`;

export const Description = styled.div``;
