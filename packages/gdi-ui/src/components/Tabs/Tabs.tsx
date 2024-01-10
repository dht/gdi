import { Tab, Wrapper } from './Tabs.style';
import classnames from 'classnames';

export type TabsProps = {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
  bottom?: boolean;
};

export function Tabs(props: TabsProps) {
  const { tabs, activeTab, bottom } = props;

  const classNameWrapper = classnames('Tab-wrapper', {
    bottom,
  });

  function renderTab(tab: string) {
    const className = classnames('Tab', {
      active: tab === activeTab,
      bottom,
    });

    return (
      <Tab key={tab} className={className} onClick={() => props.onChange(tab)}>
        {tab}
      </Tab>
    );
  }

  function renderTabs() {
    return tabs.map((tab: string) => renderTab(tab));
  }

  return (
    <Wrapper className={classNameWrapper} data-testid='Tabs-wrapper'>
      {renderTabs()}
    </Wrapper>
  );
}

export default Tabs;
