import classnames from 'classnames';
import { useContext } from 'react';
import JsonEditor from '../JsonEditor/JsonEditor.container';
import Masonry from '../Masonry/Masonry.container';
import MultiActionsContainer from '../MultiActions/MultiActions.container';
import Spreadsheet from '../Spreadsheet/Spreadsheet.container';
import StatsContainer from '../Stats/Stats.container';
import Table from '../Table/Table.container';
import Tabs from '../Tabs/Tabs.container';
import Trello from '../Trello/Trello.container';
import Calendar from '../calendar/Calendar.container';
import { MultiContext } from './Multi.context';
import { Content, Row, Summary, Wrapper } from './Multi.style';

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
  const { state, data, callbacks } = useContext(MultiContext);
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
        data={data}
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
      <Row>
        <Tabs />
        <StatsContainer data={data} />
        <MultiActionsContainer />
      </Row>
      <Content>{renderInner()}</Content>
    </Wrapper>
  );
}

export default Multi;
