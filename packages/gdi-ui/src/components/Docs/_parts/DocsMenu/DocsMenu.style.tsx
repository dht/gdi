import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;

  &.modal {
    .items {
      padding: 8px 0;
    }

    .categoryTitle {
      font-size: 20px;
      display: none;
    }

    .item {
      padding: 8px 0;
      font-size: 16px;
    }
  }
`;

export const Category = styled.div``;

export const CategoryTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 8px;

  @media (max-width: 800px) {
    font-size: 20px;
    padding: 10px 5vw;
    margin: 0;
    border-bottom: 1px solid #ddd;
    position: sticky;
    top: 0;
    background-color: white;
  }
`;

export const CategoryItems = styled.div`
  padding: 0 0 10px 20px;

  @media (max-width: 800px) {
    padding: 0;
  }
`;

export const Item = styled.div`
  padding: 4px 10px;
  cursor: pointer;
  line-height: 1.3;

  @media (max-width: 800px) {
    font-size: 18px;
    line-height: 1.5;
    padding: 10px 15vw;
    border-bottom: 1px solid #ddd;
  }

  &:hover {
    color: brown;
  }

  &.selected {
    color: brown;
    font-weight: bold;
  }
`;
