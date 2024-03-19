import { Multi } from 'multi';
import { Wrapper } from './Reminders.style';
import { initialView, multi, views } from './_multi';
import ReminderFocusContainer from './_parts/ReminderFocus/ReminderFocus.container';
import { RemindersSummaryContainer } from './_parts/RemindersSummary/RemindersSummary.container';

export type RemindersProps = {
  callbacks: {
    onAction: (verb: string, params?: Json) => void;
    onItemAction: (id: string, verb: string, params?: Json) => void;
  };
  data: Json[];
};

export function Reminders(props: RemindersProps) {
  const { data, callbacks } = props;

  function renderSummary() {
    return <RemindersSummaryContainer />;
  }

  function renderFocus(id: string) {
    return <ReminderFocusContainer id={id} />;
  }

  return (
    <Wrapper className='Reminders-wrapper' data-testid='Reminders-wrapper'>
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

export default Reminders;
