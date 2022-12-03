import React from 'react';
import { Wrapper, Key, Text } from './TopRow.style';
import { dateLong, time } from '@gdi/language';

export type TopRowProps = {
    activeTask: IActiveTask;
};

export function TopRow(props: TopRowProps) {
    const { activeTask } = props;

    if (!activeTask.session?.startTimestamp) {
        return null;
    }

    const dateRaw = new Date(activeTask.session?.startTimestamp);
    const timeText = time(dateRaw);
    const date = dateLong(dateRaw);

    return (
        <Wrapper className='TopRow-wrapper' data-testid='TopRow-wrapper'>
            <Text>
                <Key>{activeTask?.ticket?.key}</Key> | Session #
                {activeTask?.stats?.currentSessionSequence}
            </Text>
            <Text>
                Started {timeText} | {date}
            </Text>
        </Wrapper>
    );
}

export default TopRow;
