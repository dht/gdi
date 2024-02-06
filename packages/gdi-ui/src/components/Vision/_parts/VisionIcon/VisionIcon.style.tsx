import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: rgba(160, 160, 160, 0.3);

  .Icon-wrapper {
  }

  &.arrow_back_ios {
    .Icon-wrapper {
      position: relative;
      left: 4px;
    }
  }

  &.arrow_forward_ios {
    .Icon-wrapper {
      position: relative;
      left: 2px;
    }
  }
`;
