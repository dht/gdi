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

const component = {
  jsonEditor: JsonEditor,
  masonry: Masonry,
  sheet: Spreadsheet,
  table: Table,
  lanes: Trello,
};

export function Multi(_props: MultiProps) {
  const { state, callbacks } = useContext(MultiContext);
  const { activeView, config, darkMode, isReady } = state;

  if (!isReady) {
    return null;
  }

  function renderInner() {
    const Cmp: any = component[activeView];

    if (!Cmp) {
      return null;
    }

    return (
      <Cmp
        config={config[activeView]}
        data={state.data}
        callbacks={callbacks as any}
        darkMode={darkMode}
      />
    );
  }

  return (
    <Wrapper className='Multi-wrapper' data-testid='Multi-wrapper'>
      <Tabs />
      <Content>{renderInner()}</Content>
    </Wrapper>
  );
}

export default Multi;
