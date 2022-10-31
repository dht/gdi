import React from 'react';
import { Container, Key, Text } from './TopRow.style';
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
        <Container className='TopRow-container' data-testid='TopRow-container'>
            <Text>
                <Key>{activeTask?.ticket?.key}</Key> | Session #
                {activeTask?.stats?.currentSessionSequence}
            </Text>
            <Text>
                Started {timeText} | {date}
            </Text>
        </Container>
    );
}

export default TopRow;
