import React from 'react';
import { Container, Status, Breaks } from './BottomRow.style';
import { formatDuration, formatTime } from '@gdi/language';

export type BottomRowProps = {
    activeTask: IActiveTask;
    stats: ISessionStats;
};

export function BottomRow(props: BottomRowProps) {
    const { stats, activeTask } = props;
    const { breakTimeTotal, breakTimeCurrent } = stats;

    function renderBreaks() {
        const output: string[] = [];

        if (activeTask.stats.isInBreak) {
            const duration = formatDuration(breakTimeCurrent) || '<1m';
            const time = formatTime(
                new Date(activeTask.session.breakStartTimestamp)
            );
            output.push(`Current break: ${time}`);
            output.push(duration);
        }

        if (
            !activeTask.stats.isInBreak ||
            breakTimeTotal !== breakTimeCurrent
        ) {
            const title = activeTask.stats.isInBreak ? 'All' : 'Breaks taken';
            const duration = formatDuration(breakTimeTotal) || '-';
            output.push(`${title}: ${duration}`);
        }

        return output.join(' | ');
    }

    return (
        <Container
            className='BottomRow-container'
            data-testid='BottomRow-container'
        >
            <Status>
                {activeTask?.ticket?.status} | {activeTask?.ticket?.priority}
            </Status>
            <Breaks>{renderBreaks()}</Breaks>
        </Container>
    );
}

export default BottomRow;
