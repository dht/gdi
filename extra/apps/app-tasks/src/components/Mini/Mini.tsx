import React from 'react';
import {
    Wrapper,
    DetailsLine,
    Estimation,
    TaskTitle,
    Empty,
} from './Mini.style';
import { Stopwatch } from '@gdi/web-ui';
import { toDuration } from '@gdi/language';

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
    const estimation = toDuration(stats.estimation) || '-';

    return (
        <Wrapper className='Mini-wrapper' data-testid='Mini-wrapper'>
            <Stopwatch
                hours={stats.duration.hours}
                minutes={stats.duration.minutes}
            />
            <TaskTitle header='current task:'>{summary}</TaskTitle>
            <DetailsLine>
                <Estimation>Est. {estimation}</Estimation>
            </DetailsLine>
        </Wrapper>
    );
}

export default Mini;
