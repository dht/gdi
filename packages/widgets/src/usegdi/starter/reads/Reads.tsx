import { Multi } from 'multi';
import { Wrapper } from './Reads.style';
import { initialView, multi, views } from './_multi';
import ReadFocusContainer from './_parts/ReadFocus/ReadFocus.container';
import { ReadsSummaryContainer } from './_parts/ReadsSummary/ReadsSummary.container';

export type ReadsProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Reads(props: ReadsProps) {
  const { data, callbacks } = props;

  function renderSummary() {
    return <ReadsSummaryContainer />;
  }

  function renderFocus(id: string) {
    return <ReadFocusContainer id={id} />;
  }

  return (
    <Wrapper className='Reads-wrapper' data-testid='Reads-wrapper'>
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

export default Reads;
