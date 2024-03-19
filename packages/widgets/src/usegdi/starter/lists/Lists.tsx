import { Multi } from 'multi';
import { Wrapper } from './Lists.style';
import { initialView, multi, views } from './_multi';
import ListFocusContainer from './_parts/ListFocus/ListFocus.container';
import { ListsSummaryContainer } from './_parts/ListsSummary/ListsSummary.container';

export type ListsProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Lists(props: ListsProps) {
  const { data, callbacks } = props;

  function renderSummary() {
    return <ListsSummaryContainer />;
  }

  function renderFocus(id: string) {
    return <ListFocusContainer id={id} />;
  }

  return (
    <Wrapper className='Lists-wrapper' data-testid='Lists-wrapper'>
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

export default Lists;
