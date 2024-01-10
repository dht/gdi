import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  padding: 25px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const H1 = styled.h1`
  font-size: 26px;
  font-weight: 500;
  padding: 0;
  margin: 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 7px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > div {
    &::after {
      // dot
      content: '·';
      margin: 0 5px 0 8px;
    }

    &:last-child {
      &::after {
        content: '';
        margin: 0;
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Action = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
`;

export const ActionTitle = styled.div`
  margin-left: 8px;
  text-decoration: underline;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    color: palevioletred;
  }
`;

export const Rating = styled.div``;

export const Reviews = styled.div``;

export const Installations = styled.div``;

export const By = styled.div`
  padding: 0 4px 0 8px;
`;

export const Author = styled.div`
  flex: 1;
`;

export const Left = styled.div``;

export const Right = styled.div``;

export const Image = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 15px;
  background-color: #ccc;
  border-radius: 8px;
  margin-top: 5px;
  background-size: cover;
`;
