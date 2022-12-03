import React from 'react';
import { Wrapper, Text, ProjectKey, TicketKey } from './ScheduleSquare.style';
import classnames from 'classnames';

export type ScheduleSquareProps = {
    block: IScheduleBlock;
    scheduleSession?: IScheduleSession;
    project?: IProject;
    ticket?: ITicket;
    isCurrent?: boolean;
    onClick: () => void;
};

export function ScheduleSquare(props: ScheduleSquareProps) {
    const { scheduleSession, isCurrent, project, ticket } = props;

    const { title } = scheduleSession ?? {};

    let text = title;

    if (ticket) {
        text = ticket.summary;
    } else if (project) {
        text = project.name;
    }

    const className = classnames('ScheduleSquare-wrapper', {
        current: isCurrent,
    });

    const style = {
        fontSize: `${textLengthToFontSize(text)}px`,
        lineHeight: `${textLengthToFontSize(text) * 1.5}px`,
    };

    return (
        <Wrapper
            className={className}
            data-testid='ScheduleSquare-wrapper'
            onTouchStart={props.onClick}
            onMouseDown={props.onClick}
        >
            <Text style={style}>{text}</Text>
            {project && <ProjectKey className='key'>{project?.key}</ProjectKey>}
            {ticket && <TicketKey className='key'>{ticket?.key}</TicketKey>}
        </Wrapper>
    );
}

export default ScheduleSquare;

const textLengthToFontSize = (text: string = '') => {
    const length = Math.min(Math.max(text.length, 3), 16);
    return 28 - length;
};
