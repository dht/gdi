import React from 'react';
import {
    Button,
    Buttons,
    Container,
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
} from './Lifecycle.style';
import { format } from '@gdi/language';

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

export type ILifecycleAction = {
    id: string;
    title: string;
};

export type ILifecycleActions = Record<string, ILifecycleAction>;

export type LifecycleProps = {
    title?: string;
    stages: IStages;
    devMode?: boolean;
    actions?: ILifecycleActions;
    onAction: (actionId: string) => void;
};

export function Lifecycle(props: LifecycleProps) {
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
                            {format(timestamp, 'HH:mm:')}
                        </TimeHoursAndMinutes>
                        <TimeSeconds>{format(timestamp, 'ss')}</TimeSeconds>
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
        <Container
            className='Lifecycle-container'
            data-testid='Lifecycle-container'
        >
            {renderHeader()}
            {renderStages()}
            {renderButtons()}
        </Container>
    );
}

export default Lifecycle;
