import React from 'react';
import { Container } from './ConsoleLogs.style';

export type ConsoleLogsProps = {};

export function ConsoleLogs(_props: ConsoleLogsProps) {
    return (
        <Container className="ConsoleLogs-container" data-testid="ConsoleLogs-container">
            ConsoleLogs
        </Container>
    );
}

export default ConsoleLogs;
