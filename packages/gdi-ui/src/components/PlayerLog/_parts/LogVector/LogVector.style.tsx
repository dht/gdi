import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  color: #9a9;
`;

export const Key = styled.div`
  width: 60px;
`;

export const Value = styled.div`
  span {
    &::after {
      content: ' | ';
      color: #575;
    }

    &:last-child {
      &::after {
        content: '';
      }
    }
  }
`;

export const Fields = styled.div``;

export const Field = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Id = styled.div`
  width: 120px;

  span {
    color: brown;
    display: block;
  }
`;
