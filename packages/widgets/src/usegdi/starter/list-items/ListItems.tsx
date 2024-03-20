import { Multi } from 'multi';
import { Wrapper } from './ListItems.style';
import { initialView, multi, views } from './_multi';
import { ListItemFocusContainer } from './_parts/ListItemFocus/ListItemFocus.container';
import { ListItemsSummaryContainer } from './_parts/ListItemsSummary/ListItemsSummary.container';

export type ListItemsProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function ListItems(props: ListItemsProps) {
  const { data, callbacks } = props;

  function renderSummary() {
    return <ListItemsSummaryContainer />;
  }

  function renderFocus(id: string) {
    return <ListItemFocusContainer id={id} />;
  }

  return (
    <Wrapper className='ListItems-wrapper' data-testid='ListItems-wrapper'>
      <Multi //
        initialView={initialView}
        views={views}
        config={multi}
        data={data}
        callbacks={callbacks}
        darkMode
        renderSummary={renderSummary}
        renderFocus={renderFocus}
      />
    </Wrapper>
  );
}

export default ListItems;
