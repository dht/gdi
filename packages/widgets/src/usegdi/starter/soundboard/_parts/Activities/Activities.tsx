import classnames from 'classnames';
import { IActivities, IActivity } from '../../Soundboard.types';
import { minutesToTimeText, timeTextToMinutes } from '../../Soundboard.utils';
import { Activity, Color, Flex, Name, Stat, Stats, Time, Wrapper } from './Activities.style';
import { sortBy } from 'shared-base';

export type ActivitiesProps = {
  activities?: IActivities;
  currentDuration?: number;
  selectedId?: string;
  onChange: (activityId: string) => void;
  onTimeChange: (activityId: string, desiredMinutes: number) => void;
};

export function Activities(props: ActivitiesProps) {
  const { activities = [], selectedId, currentDuration = 0 } = props;

  function onDesiredTimeChange(ev: React.ChangeEvent<HTMLInputElement>, activityId: string) {
    const minutes = timeTextToMinutes(ev.target.value);
    props.onTimeChange(activityId, minutes);
  }

  function renderActivity(activity: IActivity) {
    const { name, color, todayDesired } = activity;

    const className = classnames('activity', {
      selected: activity.id === selectedId,
    });

    return (
      <Activity key={activity.id} className={className}>
        <Color color={color} />
        <Name onClick={() => props.onChange(activity.id)}>{name}</Name>
        <Flex />
        <Stats className='stats'>
          <Stat>{minutesToTimeText(currentDuration)}</Stat>
        </Stats>
        <Flex />
        <Time defaultValue={todayDesired} onBlur={(ev) => onDesiredTimeChange(ev, activity.id)} />
      </Activity>
    );
  }

  function renderActivities() {
    return Object.values(activities)
      .sort(sortBy('name'))
      .map((activity: IActivity) => renderActivity(activity));
  }
  return (
    <Wrapper className='Activities-wrapper' data-testid='Activities-wrapper'>
      {renderActivities()}
    </Wrapper>
  );
}

export default Activities;
