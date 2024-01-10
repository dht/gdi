import { Wrapper } from './Table.style';

export type TableProps = {};

export function Table(_props: TableProps) {
  return (
    <Wrapper className='Table-wrapper' data-testid='Table-wrapper'>
      Table
    </Wrapper>
  );
}

export default Table;
