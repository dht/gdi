import React from 'react';
import { Wrapper, Status, Breaks } from './BottomRow.style';
import { duration as toDurationText, time } from '@gdi/language';

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
            const duration = toDurationText(breakTimeCurrent) || '<1m';
            const timeText = time(
                new Date(activeTask.session.breakStartTimestamp)
            );
            output.push(`Current break: ${timeText}`);
            output.push(duration);
        }

        if (
            !activeTask.stats.isInBreak ||
            breakTimeTotal !== breakTimeCurrent
        ) {
            const title = activeTask.stats.isInBreak ? 'All' : 'Breaks taken';
            const duration = toDurationText(breakTimeTotal) || '-';
            output.push(`${title}: ${duration}`);
        }

        return output.join(' | ');
    }

    return (
        <Wrapper className='BottomRow-wrapper' data-testid='BottomRow-wrapper'>
            <Status>
                {activeTask?.ticket?.status} | {activeTask?.ticket?.priority}
            </Status>
            <Breaks>{renderBreaks()}</Breaks>
        </Wrapper>
    );
}

export default BottomRow;
