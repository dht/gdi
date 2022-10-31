import React from 'react';
import {
    Container,
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
            <Container className='Mini-container' data-testid='Mini-container'>
                <Empty>no task</Empty>
            </Container>
        );
    }

    const { stats, ticket } = activeTask;

    const { summary } = ticket ?? {};
    const estimation = toDuration(stats.estimation) || '-';

    return (
        <Container className='Mini-container' data-testid='Mini-container'>
            <Stopwatch
                hours={stats.duration.hours}
                minutes={stats.duration.minutes}
            />
            <TaskTitle header='current task:'>{summary}</TaskTitle>
            <DetailsLine>
                <Estimation>Est. {estimation}</Estimation>
            </DetailsLine>
        </Container>
    );
}

export default Mini;
