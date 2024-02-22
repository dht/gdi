import { TabsBig, useMeasureOnce } from '@gdi/ui';
import { tabs } from './MusicList.data';
import { Content, List, Top, Wrapper } from './MusicList.style';
import MusicItem from './_parts/MusicItem/MusicItem';
import MusicSearch from './_parts/MusicSearch/MusicSearch';

export type MusicListProps = {
  tabId: string;
  items: Json[];
  callbacks: {
    onChange: (remoteItemId: string) => void;
    onTabChange: (value: string) => void;
    onSearch: (value: string) => void;
  };
};

export function MusicList(props: MusicListProps) {
  const { items = [], tabId, callbacks } = props;
  const [ref, { height }] = useMeasureOnce();

  function renderItem(item: Json) {
    return <MusicItem key={item.id} item={item} onClick={callbacks.onChange} />;
  }

  function renderItems() {
    return items.map((item: Json) => renderItem(item));
  }

  const style: React.CSSProperties = {
    maxHeight: height - 100 + 'px',
  };

  return (
    <Wrapper className='MusicList-wrapper' data-testid='MusicList-wrapper'>
      <Top>
        <TabsBig tabs={tabs} activeTab={tabId} onChange={callbacks.onTabChange} />
      </Top>
      <Content ref={ref}>
        {tabId === 'search' && <MusicSearch onSearch={callbacks.onSearch} />}
        <List style={style}>{renderItems()}</List>
      </Content>
    </Wrapper>
  );
}

export default MusicList;
