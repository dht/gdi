import { Multi } from 'multi';
import { Wrapper } from './Events.style';
import { initialView, multi, views } from './_multi';
import EventsSummary, {
  EventsSummaryContainer,
} from './_parts/EventsSummary/EventsSummary.container';
import EventFocusContainer from './_parts/EventFocus/EventFocus.container';

export type EventsProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Events(props: EventsProps) {
  const { data, callbacks } = props;

  function renderSummary() {
    return <EventsSummaryContainer />;
  }

  function renderFocus(id: string) {
    return <EventFocusContainer id={id} />;
  }

  return (
    <Wrapper className='Events-wrapper' data-testid='Events-wrapper'>
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

export default Events;
