import { ChartTime } from '@gdi/ui';
import { useActivities } from './Soundboard.hooks';
import { calcFreeBudgetForToday, timeChartCurrent, timeChartDesired } from './Soundboard.selectors';
import { Budget, Charts, Wrapper } from './Soundboard.style';
import { Activities } from './_parts/Activities/Activities';
import { useMemo } from 'react';
import { minutesToTimeText, toMinutes } from './Soundboard.utils';
import Sessions from './_parts/Sessions/Sessions';
import TimeBudget from './_parts/TimeBudget/TimeBudget';

export type SoundboardProps = {};

export function Soundboard(props: SoundboardProps) {
  const { state, callbacks, currentSession } = useActivities();

  const currentDuration = useMemo(() => {
    return toMinutes(currentSession?.duration);
  }, [currentSession]);

  const chartCurrent = useMemo(() => {
    return timeChartCurrent(state);
  }, [state, currentDuration]);

  const chartDesired = useMemo(() => {
    return timeChartDesired(state);
  }, [state]);

  const freeBudget = useMemo(() => {
    return calcFreeBudgetForToday(state);
  }, [state]);

  function labelParser(value: number) {
    return minutesToTimeText(value);
  }

  return (
    <Wrapper className='Soundboard-wrapper' data-testid='Soundboard-wrapper'>
      <Charts>
        <ChartTime {...chartCurrent} size={220} labelParser={labelParser} />
        <ChartTime {...chartDesired} size={220} labelParser={labelParser} />
        <Budget>
          <TimeBudget freeBudget={freeBudget} />
        </Budget>
      </Charts>
      <Activities
        activities={state.activities}
        currentDuration={currentDuration}
        selectedId={state.localState?.activityId}
        onTimeChange={callbacks.onDesiredChange}
        onChange={callbacks.onActivityChange}
      />
      <Sessions
        sessions={state.sessions}
        activities={state.activities}
        onDelete={callbacks.onDeleteSession}
        onChange={callbacks.onChangeSession}
      />
    </Wrapper>
  );
}

export default Soundboard;
