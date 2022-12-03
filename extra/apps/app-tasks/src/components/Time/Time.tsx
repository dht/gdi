import React from 'react';
import { Wrapper, Status } from './Time.style';
import Stopwatch from '../Stopwatch/Stopwatch';

export type TimeProps = {
    duration?: CompactDuration;
    activeTask: IActiveTask;
};

export function Time(props: TimeProps) {
    const { activeTask, duration } = props;

    function renderStatus() {
        let status = '';

        if (activeTask.stats.isRunning) {
            status = '';
        } else if (activeTask.stats.isInBreak) {
            status = 'paused';
        }

        return <Status>{status}</Status>;
    }

    function renderTime() {
        return <Stopwatch duration={duration} />;
    }

    return (
        <Wrapper className='Time-wrapper' data-testid='Time-wrapper'>
            {renderStatus()}
            {renderTime()}
        </Wrapper>
    );
}

export default Time;
