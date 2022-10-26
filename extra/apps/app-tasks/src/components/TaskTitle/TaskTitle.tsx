import React from 'react';
import { Container, Header, Scope, Summary } from './TaskTitle.style';

export type TaskTitleProps = {
    header?: string;
    summary: string;
};

export function TaskTitle(props: TaskTitleProps) {
    const { header, summary } = props;

    function renderContent() {
        const regexScope = /([a-zA-Z]+) ?\([a-zA-Z-]+\):/;

        const match = summary.match(regexScope);

        if (!match) {
            return (
                <>
                    <Header>{header}</Header>
                    <Summary>{summary}</Summary>
                </>
            );
        }

        return (
            <>
                <Scope>{match[0]}</Scope>
                <Summary>{summary.replace(match[0], '').trim()}</Summary>
            </>
        );
    }

    return (
        <Container
            className='TaskTitle-container'
            data-testid='TaskTitle-container'
        >
            {renderContent()}
        </Container>
    );
}

export default TaskTitle;
