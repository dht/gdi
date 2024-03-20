import { Multi } from 'multi';
import { Wrapper } from './Lists.style';
import { ListFocusContainer } from './_parts/ListFocus/ListFocus.container';
import { ListsSummaryContainer } from './_parts/ListsSummary/ListsSummary.container';

export type ListsProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
  multi: any;
  listId?: string;
};

export function Lists(props: ListsProps) {
  const { data, multi, listId, callbacks } = props;

  function renderSummary() {
    return <ListsSummaryContainer />;
  }

  function renderFocus(id: string) {
    return <ListFocusContainer id={id} />;
  }

  return (
    <Wrapper className='Lists-wrapper' data-testid='Lists-wrapper'>
      <Multi //
        initialView={multi.initialView}
        views={multi.views}
        config={multi.config}
        data={data}
        callbacks={callbacks}
        darkMode
        renderSummary={renderSummary}
        renderFocus={renderFocus}
      />
    </Wrapper>
  );
}

export default Lists;
