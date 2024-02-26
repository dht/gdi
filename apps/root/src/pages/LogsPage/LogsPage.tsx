import React from 'react';
import { Wrapper } from './LogsPage.style';

export type LogsPageProps = {};

export function LogsPage(_props: LogsPageProps) {
    return (
        <Wrapper className="LogsPage-wrapper" data-testid="LogsPage-wrapper">
            LogsPage
        </Wrapper>
    );
}

export default LogsPage;
