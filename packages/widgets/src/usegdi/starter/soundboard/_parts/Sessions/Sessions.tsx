import React, { useMemo } from 'react';
import { Action, Actions, Duration, Item, Name, Time, Wrapper } from './Sessions.style';
import { ISessions, ISession, IActivities } from '../../Soundboard.types';
import { GenericTable, Icon } from '@gdi/ui';
import { toMinutes, minutesToTimeText, toTime, isToday } from '../../Soundboard.utils';
import { sortBy } from 'shared-base';

export type SessionsProps = {
  sessions: ISessions;
  activities: IActivities;
  onDelete: (sessionId: string) => void;
  onChange: (sessionId: string, activityName: string) => void;
};

export function Sessions(props: SessionsProps) {
  const { sessions, activities } = props;

  const sessionsArray = useMemo(() => {
    return Object.values(sessions)
      .filter((session: ISession) => isToday(session.start))
      .sort(sortBy('start', 'desc'));
  }, [sessions]);

  function Row(params: any) {
    const { item } = params;
    const { activityId, start, duration } = item;
    const activity = activities[activityId];

    const { name } = activity ?? {};

    return (
      <Item key={item.id}>
        <Time>{toTime(start)}</Time>
        <Name onClick={() => props.onChange(item.id, name)}>{name}</Name>
        <Duration>{minutesToTimeText(toMinutes(duration))}</Duration>
        <Actions>
          <Action onClick={() => props.onDelete(item.id)}>
            <Icon name='delete' />
          </Action>
        </Actions>
      </Item>
    );
  }

  return (
    <Wrapper className='Sessions-wrapper' data-testid='Sessions-wrapper'>
      <GenericTable height={300} mode='rows' data={sessionsArray}>
        {Row}
      </GenericTable>
    </Wrapper>
  );
}

export default Sessions;
