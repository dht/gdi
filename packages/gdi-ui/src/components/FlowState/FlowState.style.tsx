import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  position: absolute;
  bottom: 32rem;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

export const Status = styled.div`
  color: #334;
  font-size: 20rem;
  text-align: center;
  text-transform: capitalize;
  padding: 8rem 0;

  &.done {
    background-color: #b2c414;
    color: #68720b;
    font-weight: bold;
  }
`;
