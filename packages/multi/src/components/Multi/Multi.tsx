import classnames from 'classnames';
import { useContext, useRef } from 'react';
import JsonEditor from '../JsonEditor/JsonEditor.container';
import Masonry from '../Masonry/Masonry.container';
import MultiActionsContainer from '../MultiActions/MultiActions.container';
import FilterByTierContainer from '../Filters/FilterByTier.container';
import FilterByWeekContainer from '../Filters/FilterByWeek.container';
import Spreadsheet from '../Spreadsheet/Spreadsheet.container';
import StatsContainer from '../Stats/Stats.container';
import Table from '../Table/Table.container';
import Tabs from '../Tabs/Tabs.container';
import Trello from '../Trello/Trello.container';
import Calendar from '../calendar/Calendar.container';
import { MultiContext } from './Multi.context';
import { Content, Footer, Row, External, Wrapper } from './Multi.style';
import FilterByTagsContainer from '../Filters/FilterByTags.container';
import FilterByProjectContainer from '../Filters/FilterByProject.container';
import MultiCtasContainer from '../MultiCtas/MultiCtas.container';
import { useCustomEvent } from '../Spreadsheet/Spreadsheet.hooks';
import { useMeasure } from 'react-use';
import FilterByTodayContainer from '../Filters/FilterByToday.container';

export type MultiProps = {
  renderSummary?: () => React.ReactNode;
  renderFocus?: (itemId?: string) => React.ReactNode;
  renderTools?: (itemId?: string) => React.ReactNode;
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
  const { state, data, callbacks, patchState } = useContext(MultiContext);
  const { activeView, views, config, darkMode, isReady, showItemActions, itemId } = state;
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();

  useCustomEvent('multi/item/select', (ev: any) => {
    const { id } = ev;
    patchState({ itemId: id });
  });

  useCustomEvent(
    'multi/item/drillDown',
    (ev: any) => {
      const { id } = ev;
      if (!views.includes('focus')) return;
      patchState({ activeView: 'focus', itemId: id });
    },
    [views]
  );

  if (!isReady) {
    return null;
  }

  function renderInner() {
    switch (activeView) {
      case 'summary':
        if (!props.renderSummary) return;
        return <External>{props.renderSummary()}</External>;
      case 'focus':
        if (!props.renderFocus) return;
        return <External>{props.renderFocus(itemId)}</External>;
    }

    const Cmp: any = component[activeView];

    if (!Cmp || !height) {
      return null;
    }

    return (
      <Cmp
        id={config.id}
        config={config[activeView]}
        data={data}
        callbacks={callbacks as any}
        darkMode={darkMode}
        width={width}
        height={height}
      />
    );
  }

  function renderItemCtas() {
    if (!showItemActions) return;

    return <MultiCtasContainer />;
  }

  function renderTools() {
    if (!props.renderTools) return;

    return props.renderTools(itemId);
  }

  const className = classnames('Multi-wrapper', {
    dark: darkMode,
  });

  return (
    <Wrapper className={className} data-testid='Multi-wrapper'>
      <Row>
        <Tabs />
        <StatsContainer data={data} />
        <MultiActionsContainer>{renderTools()}</MultiActionsContainer>
      </Row>
      {renderItemCtas()}
      <Content ref={ref}>{renderInner()}</Content>
      <Footer>
        <FilterByTodayContainer />
        <FilterByTagsContainer />
        <FilterByProjectContainer />
        <FilterByWeekContainer />
        <FilterByTierContainer />
      </Footer>
    </Wrapper>
  );
}

export default Multi;
