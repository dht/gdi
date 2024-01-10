import { useContext } from 'react';
import JsonEditor from '../JsonEditor/JsonEditor.container';
import Masonry from '../Masonry/Masonry.container';
import Spreadsheet from '../Spreadsheet/Spreadsheet.container';
import Table from '../Table/Table.container';
import Tabs from '../Tabs/Tabs.container';
import Trello from '../Trello/Trello.container';
import { MultiContext } from './Multi.context';
import { Content, Wrapper } from './Multi.style';

export type MultiProps = {};

export function Multi(_props: MultiProps) {
  const { state, callbacks } = useContext(MultiContext);
  const { activeView, config, isReady } = state;

  if (!isReady) {
    return null;
  }

  function renderInner() {
    switch (activeView) {
      case 'jsonEditor':
        return (
          <JsonEditor config={config.jsonEditor} data={state.data} callbacks={callbacks as any} />
        );
      case 'masonry':
        return <Masonry config={config.masonry} data={state.data} callbacks={callbacks as any} />;
      case 'spreadsheet':
        return (
          <Spreadsheet config={config.spreadsheet} data={state.data} callbacks={callbacks as any} />
        );
      case 'table':
        return <Table config={config.table} data={state.data} callbacks={callbacks as any} />;
      case 'board':
        return <Trello config={config.board} data={state.data} callbacks={callbacks as any} />;
    }
  }

  return (
    <Wrapper className='Multi-wrapper' data-testid='Multi-wrapper'>
      <Tabs />
      <Content>{renderInner()}</Content>
    </Wrapper>
  );
}

export default Multi;
