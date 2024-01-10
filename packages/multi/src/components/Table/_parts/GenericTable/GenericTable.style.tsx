import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;

  .icon {
    cursor: pointer;
    margin: 0 4px;

    &:hover {
      color: gold;
    }
  }

  .table {
    overflow-x: hidden !important;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #334;
    }

    ::-webkit-scrollbar-thumb {
      background: #556;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #667;
    }
  }
`;

export const Empty = styled.div`
  color: #334;
  font-size: 23px;
  flex: 1;
  text-align: center;
  margin-top: 150px;
`;

export const Item = styled.div<{ index: number }>`
  display: flex;
  font-size: 18px;

  background-color: ${(props) => (props.index % 2 === 0 ? 'rgba(0,0,0,0.2)' : 'transparent')};
`;
