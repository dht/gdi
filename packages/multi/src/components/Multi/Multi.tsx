import { useContext } from 'react';
import JsonEditor from '../JsonEditor/JsonEditor.container';
import Masonry from '../Masonry/Masonry.container';
import Spreadsheet from '../Spreadsheet/Spreadsheet.container';
import Table from '../Table/Table.container';
import Tabs from '../Tabs/Tabs.container';
import Trello from '../Trello/Trello.container';
import { MultiContext } from './Multi.context';
import { Content, Summary, Wrapper } from './Multi.style';
import Calendar from '../calendar/Calendar.container';
import classnames from 'classnames';

export type MultiProps = {
  children?: React.ReactNode;
};

const component = {
  jsonEditor: JsonEditor,
  masonry: Masonry,
  sheet: Spreadsheet,
  table: Table,
  lanes: Trello,
  calendar: Calendar,
};

export function Multi(props: MultiProps) {
  const { state, callbacks } = useContext(MultiContext);
  const { activeView, config, darkMode, isReady } = state;

  if (!isReady) {
    return null;
  }

  function renderInner() {
    if (activeView === 'summary') {
      return <Summary>{props.children}</Summary>;
    }

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

  const className = classnames('Multi-wrapper', {
    dark: darkMode,
  });

  return (
    <Wrapper className={className} data-testid='Multi-wrapper'>
      <Tabs />
      <Content>{renderInner()}</Content>
    </Wrapper>
  );
}

export default Multi;
