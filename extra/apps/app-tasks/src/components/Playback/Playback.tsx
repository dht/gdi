import React from 'react';
import { Wrapper, Empty } from './Playback.style';
import { IconButton } from '@gdi/web-ui';

export type PlaybackProps = {
    activeTask: IActiveTask;
    callbacks: {
        onCancel: () => void;
        onResume: () => void;
        onPause: () => void;
        onStop: () => void;
        onDone: () => void;
    };
};

export function Playback(props: PlaybackProps) {
    const { activeTask, callbacks } = props;

    if (!activeTask.isLoaded) {
        return (
            <Wrapper className='Playback-wrapper'>
                <Empty>No active session</Empty>
            </Wrapper>
        );
    }

    return (
        <Wrapper className='Playback-wrapper' data-testid='Playback-wrapper'>
            <IconButton
                iconName='Cancel'
                title='Cancel session'
                ariaLabel='Cancel session'
                className='icon'
                onClick={callbacks.onCancel}
            />

            {activeTask.stats.isInBreak ? (
                <IconButton
                    iconName='Play'
                    title='Resume session'
                    ariaLabel='Resume session'
                    className='icon'
                    onClick={callbacks.onResume}
                />
            ) : (
                <IconButton
                    iconName='Pause'
                    title='Pause session'
                    ariaLabel='Pause session'
                    className='icon'
                    onClick={callbacks.onPause}
                />
            )}
            <IconButton
                iconName='Stop'
                title='End session'
                ariaLabel='End session'
                className='icon'
                onClick={callbacks.onStop}
            />
            <IconButton
                iconName='SkypeCircleCheck'
                title='Complete task'
                ariaLabel='Complete task'
                className='icon'
                onClick={callbacks.onDone}
            />
        </Wrapper>
    );
}

export default Playback;
