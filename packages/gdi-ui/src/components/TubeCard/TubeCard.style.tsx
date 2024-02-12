import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 20px;
  color: #333;
  margin-bottom: 30px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  box-sizing: border-box;

  @media (max-width: 800px) {
    color: white;
  }

  &:hover {
    .title {
      border-bottom: 2px solid palevioletred;
    }
  }

  &.minimal {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin: 1px;
    cursor: pointer;

    .image {
      border-radius: 0;

      .author {
        display: none;
        position: absolute;
        bottom: 5px;
        right: 5px;
        color: goldenrod;
        background-color: #000;
        padding: 2px 4px;
        border-radius: 4px;
      }
    }

    .details,
    .duration {
      display: none;
    }

    &:hover {
      opacity: 0.8;

      .image {
        .author {
          display: block;
        }
      }
    }
  }
`;

export const Image = styled.div`
  width: 354px;
  height: 210px;
  background-color: #333;
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 0;
`;

export const Column = styled.div`
  flex: 1;

  &:first-child {
    max-width: 50px;
  }
`;

export const AvatarUrl = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-color: white;
  background-size: 80%;
  background-repeat: no-repeat;
  box-shadow: inset 1px 1px 1px 0 rgba(0, 0, 0, 0.2), inset -1px -1px 1px 0 rgba(0, 0, 0, 0.2);
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const Author = styled.div`
  color: #aac;
  font-size: 14px;
`;

export const Stats = styled.div`
  color: #aac;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Views = styled.div`
  &:after {
    content: '•';
    margin: 0 5px;
  }
`;

export const TimeAgo = styled.div``;

export const Duration = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
`;
