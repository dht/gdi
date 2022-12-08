import React from 'react';
import { Wrapper, DetailsLine, Estimation, Empty } from './Mini.style';
import { Stopwatch } from '@gdi/web-ui';
import { duration as toDurationText } from '@gdi/language';
import TaskTitle from '../TaskTitle/TaskTitle';

export type MiniProps = {
    activeTask: IActiveTask;
};

export function Mini(props: MiniProps) {
    const { activeTask } = props;

    if (!activeTask || !activeTask.isLoaded) {
        return (
            <Wrapper className='Mini-wrapper' data-testid='Mini-wrapper'>
                <Empty>no task</Empty>
            </Wrapper>
        );
    }

    const { stats, ticket } = activeTask;

    const { summary } = ticket ?? {};
    const estimation = toDurationText(stats.estimation) || '-';

    return (
        <Wrapper className='Mini-wrapper' data-testid='Mini-wrapper'>
            <Stopwatch
                hours={stats.duration.hours ?? 0}
                minutes={stats.duration.minutes ?? 0}
            />
            <TaskTitle header='current task:' summary={summary} />
            <DetailsLine>
                <Estimation>Est. {estimation}</Estimation>
            </DetailsLine>
        </Wrapper>
    );
}

export default Mini;
