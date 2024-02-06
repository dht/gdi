import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  width: 302px;
  height: 386px;
  width: var(--item-width);
  cursor: pointer;
  position: relative;

  @media (max-width: 800px) {
    height: 270px;
  }

  &:hover {
    .name {
      span {
        border-bottom: 2px solid palevioletred;
      }
    }
  }

  &.wip {
    .wip {
      display: block;
    }

    &:hover {
      .soon {
        opacity: 1;
      }
    }
  }

  &.soon {
    .soon {
      display: block;
    }

    &:hover {
      .soon {
        opacity: 1;
      }
    }

    .image {
      //grayscale and opacity
      filter: grayscale(100%) opacity(0.2);

      transition: all 0.2s ease-in-out;

      &:hover {
        filter: grayscale(0%);
        opacity: 1;
      }
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 286px;
  border-radius: 20px 2px 20px 20px;
  background-color: #ccc;
  background-size: cover;
  background-position: center;
  background-color: #eee;
  position: relative;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 800px) {
    height: 150px;
  }
`;

export const Details = styled.div`
  font-size: 15px;
  padding: 12px 0 0;
`;

export const Name = styled.div`
  font-weight: 60 0;
  margin-bottom: 4px;
  font-weight: bold;

  span {
    border-bottom: 2px solid transparent;
  }
`;

export const Description = styled.div`
  line-height: 1.2;
  color: #666;
  margin-top: 5px;

  // max three rows ellipsis
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Tags = styled.div``;

export const Identifier = styled.div`
  color: #aaa;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2px 0;
`;

export const Version = styled.div`
  color: #aaa;
`;

export const Author = styled.div`
  color: #aaa;
`;

export const Soon = styled.div`
  //gradient
  background-image: linear-gradient(45deg, #ffffff 0%, #eee 100%);
  position: absolute;
  top: 235px;
  right: 0;
  padding: 8px 20px;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  opacity: 0.6;
  color: #99a;
  font-weight: bold;
  border-radius: 8px 0 0 8px;
  z-index: 999;
  border-right: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), inset 5px 0 10px rgba(0, 0, 0, 0.2);
  display: none;

  @media (max-width: 800px) {
    top: 110px;
  }
`;

export const Wip = styled(Soon)`
  background-image: linear-gradient(45deg, gold 0%, #eee 100%);
  color: #916d13;
`;
