import React from 'react';
import { Rect, Tab, Tabs, Wrapper } from './TabsBig.style';
import { useAltNumber, useSlide } from './TabsBig.hooks';
import { useMount } from '../../hooks/useMount';

export type TabsBigProps = {
  tabs: Json[];
  activeTab: string;
  onChange: (tab: string) => void;
};

export function TabsBig(props: TabsBigProps) {
  const { tabs, activeTab } = props;
  const [ref, boundingBox] = useSlide(tabs, activeTab);

  useAltNumber(
    (num: number) => {
      if (num > tabs.length) {
        return;
      }

      props.onChange(tabs[num - 1].id);
    },
    [tabs]
  );

  function renderTab(tab: Json) {
    const { title } = tab;

    return (
      <Tab key={tab.id} className='tab' onClick={() => props.onChange(tab.id)}>
        {title}
      </Tab>
    );
  }

  function renderTabs() {
    return tabs.map((tab: Json) => renderTab(tab));
  }

  function renderRect() {
    const style: React.CSSProperties = {
      left: boundingBox.left,
      width: boundingBox.width,
    };

    return <Rect style={style} />;
  }

  return (
    <Wrapper className='TabsBig-wrapper' data-testid='TabsBig-wrapper'>
      {renderRect()}
      <Tabs ref={ref}>{renderTabs()}</Tabs>
    </Wrapper>
  );
}

export default TabsBig;
