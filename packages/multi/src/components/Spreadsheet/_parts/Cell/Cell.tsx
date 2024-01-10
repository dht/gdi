import { areaDimension } from '../../Spreadsheet.utils';
import { ISheetCell } from '../../Spreadsheet.types';
import { Wrapper } from './Cell.style';
import classnames from 'classnames';

export type CellProps = {
  data: ISheetCell;
};

export function Cell(props: CellProps) {
  const { data } = props;
  const { x, y, value, cellType, isLoading } = data;

  const style: React.CSSProperties = {
    gridArea: areaDimension(y, x, 1, 1),
  };

  const className = classnames('Cell-wrapper', cellType, {
    firstCol: x === 1,
    loading: isLoading,
    empty: value === '-',
  });

  function renderInner() {
    if (isLoading) {
      return <></>;
    }

    return value;
  }

  return (
    <Wrapper className={className} data-testid='Cell-wrapper' style={style}>
      {renderInner()}
    </Wrapper>
  );
}

export default Cell;
