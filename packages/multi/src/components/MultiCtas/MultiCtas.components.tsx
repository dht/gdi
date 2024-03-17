import styled from 'styled-components';

export function MultiCtasEmpty(_props: any) {
  return (
    <EmptyWrapper>
      <Empty>No item selected</Empty>
    </EmptyWrapper>
  );
}

export const EmptyWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Empty = styled.div`
  text-align: center;
  opacity: 0.5;
  font-size: 16px;
`;
