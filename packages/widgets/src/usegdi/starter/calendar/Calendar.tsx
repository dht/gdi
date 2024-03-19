import { Multi } from 'multi';
import { Wrapper } from './Calendar.style';
import { initialView, multi, views } from './_multi';
import CalendarFocusContainer from './_parts/CalendarFocus/CalendarFocus.container';
import { CalendarSummaryContainer } from './_parts/CalendarSummary/CalendarSummary.container';

export type CalendarProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Calendar(props: CalendarProps) {
  const { data, callbacks } = props;

  function renderSummary() {
    return <CalendarSummaryContainer />;
  }

  function renderFocus() {
    return <CalendarFocusContainer />;
  }

  return (
    <Wrapper className='Calendar-wrapper' data-testid='Calendar-wrapper'>
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

export default Calendar;
