import React from 'react';
import {
    Button,
    Buttons,
    Wrapper,
    Details,
    Header,
    Icon,
    Index,
    Indexes,
    Step,
    Subtitle,
    Time,
    TimeHoursAndMinutes,
    TimeSeconds,
    Title,
} from './LogsLifecycle.style';
import { time } from '@gdi/language';

export type IStage = {
    id: string;
    index?: number;
    title: string;
    subtitle?: string;
    timestamp?: number;
    error?: string;
    success?: boolean;
    isRunning?: boolean;
    indexes: number[];
};

export type IStages = Record<string, IStage>;

export type ILogsLifecycleAction = {
    id: string;
    title: string;
};

export type ILogsLifecycleActions = Record<string, ILogsLifecycleAction>;

export type LogsLifecycleProps = {
    title?: string;
    stages: IStages;
    devMode?: boolean;
    actions?: ILogsLifecycleActions;
    onAction: (actionId: string) => void;
};

export function LogsLifecycle(props: LogsLifecycleProps) {
    const { title, stages = {}, actions = {}, devMode } = props;

    function renderStage(step: IStage) {
        const {
            id,
            title,
            subtitle,
            timestamp,
            error,
            success = true,
            isRunning = false,
            indexes,
        } = step;

        return (
            <Step key={id} className='step'>
                <Icon
                    success={success}
                    isRunning={isRunning}
                    className='material-icons'
                >
                    {success
                        ? 'done'
                        : error
                        ? 'remove'
                        : isRunning
                        ? 'autorenew'
                        : ''}
                </Icon>
                <Details>
                    <Title>{title}</Title>
                    <Subtitle>{error || subtitle}</Subtitle>
                </Details>
                <Indexes>
                    {indexes.map((index: number) => (
                        <Index key={index}>{index}</Index>
                    ))}
                </Indexes>
                {timestamp && (
                    <Time>
                        <TimeHoursAndMinutes>
                            {time(timestamp) + ':'}
                        </TimeHoursAndMinutes>
                    </Time>
                )}
            </Step>
        );
    }

    function renderStages() {
        return Object.values(stages).map((stage: IStage) => renderStage(stage));
    }

    function renderButton(button: any) {
        const { id, title } = button;
        return (
            <Button key={id} onClick={() => props.onAction(id)}>
                {title}
            </Button>
        );
    }

    function renderButtons() {
        if (!devMode) {
            return null;
        }

        return (
            <Buttons>
                {Object.values(actions).map((action) => renderButton(action))}
            </Buttons>
        );
    }

    function renderHeader() {
        if (!title) {
            return null;
        }

        return <Header>{title}</Header>;
    }

    return (
        <Wrapper
            className='LogsLifecycle-wrapper'
            data-testid='LogsLifecycle-wrapper'
        >
            {renderHeader()}
            {renderStages()}
            {renderButtons()}
        </Wrapper>
    );
}

export default LogsLifecycle;
