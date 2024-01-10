import { Tab, Wrapper } from './Tabs.style';
import classnames from 'classnames';
import { ITab } from './Tabs.types';

export type TabsProps = {
  tabs: ITab[];
  activeTab: string;
  onChange: (tabId: string) => void;
  bottom?: boolean;
};

export function Tabs(props: TabsProps) {
  const { tabs, activeTab, bottom } = props;

  const classNameWrapper = classnames('Tab-wrapper', {
    bottom,
  });

  function renderTab(tab: ITab) {
    const className = classnames('Tab', {
      active: tab.id === activeTab,
      bottom,
    });

    return (
      <Tab key={tab.id} className={className} onClick={() => props.onChange(tab.id)}>
        {tab.title}
      </Tab>
    );
  }

  function renderTabs() {
    return tabs.map((tab) => renderTab(tab));
  }

  return (
    <Wrapper className={classNameWrapper} data-testid='Tabs-wrapper'>
      {renderTabs()}
    </Wrapper>
  );
}

export default Tabs;
