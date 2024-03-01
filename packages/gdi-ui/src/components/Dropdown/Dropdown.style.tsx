import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;

  &.dark {
    select {
      background-color: #111115;
      color: #fff;
    }
  }
`;

export const Select = styled.select`
  padding: 3px 5px;
`;
