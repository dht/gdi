import { ITableRowAction } from '../../Table.types';
import { Icon } from '../Icon/Icon';
import { Action, Wrapper } from './TableRowActions.style';

export type TableRowActionsProps = {
  actions?: ITableRowAction[];
  onRowAction: (actionId: string) => void;
};

export function TableRowActions(props: TableRowActionsProps) {
  const { actions = [] } = props;

  function renderAction(action: ITableRowAction) {
    const { iconName } = action;

    return (
      <Action
        key={action.id}
        className='action'
        title={action.title}
        onClick={() => props.onRowAction(action.id)}
      >
        {/* <Icon icon={iconName} /> */}
      </Action>
    );
  }

  function renderActions() {
    return actions.map((action: ITableRowAction) => renderAction(action));
  }

  return (
    <Wrapper className='TableRowActions-wrapper' data-testid='TableRowActions-wrapper'>
      {renderActions()}
    </Wrapper>
  );
}

export default TableRowActions;
