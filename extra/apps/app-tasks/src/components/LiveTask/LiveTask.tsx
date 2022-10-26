import React from 'react';
import BottomRow from '../BottomRow/BottomRow';
import JiraParagraph from '../JiraParagraph/JiraParagraph';
import TaskStats from '../TaskStats/TaskStats';
import TaskTitle from '../TaskTitle/TaskTitle';
import Time from '../Time/Time';
import TopRow from '../TopRow/TopRow';
import {
    Container,
    Content,
    Inner,
    Sync,
    EstimateWrapper,
} from './LiveTask.style';
import { ProgressBar } from '@gdi/web-ui';
import { EstimateContainer } from '../../containers/singles/EstimateContainer';

export type LiveTaskProps = {
    activeTask: IActiveTask;
    callbacks: {
        onSync: () => void;
    };
};

export function LiveTask(props: LiveTaskProps) {
    const { activeTask } = props;

    const { stats } = activeTask;

    return (
        <Container
            className='LiveTask-container'
            data-testid='LiveTask-container'
        >
            <TopRow activeTask={activeTask} />
            <Sync onClick={props.callbacks.onSync}>
                <i className='material-icons'>autorenew</i>
            </Sync>
            <EstimateWrapper>
                <EstimateContainer />
            </EstimateWrapper>
            <Content>
                <Inner>
                    <Time activeTask={activeTask} duration={stats.duration} />
                    <TaskTitle
                        header='current task:'
                        summary={activeTask?.ticket?.summary}
                    />
                    <ProgressBar value={stats.percent} width={600} />
                    <TaskStats stats={stats} />
                    <JiraParagraph content={activeTask?.ticket?.description} />
                </Inner>
            </Content>
            <BottomRow activeTask={activeTask} stats={stats} />
        </Container>
    );
}

export default LiveTask;
