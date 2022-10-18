import React, { useContext } from 'react';
import { Container, H1 } from './OverviewBar.style';
import { Clock } from '../Clock/Clock';
import { AccountSelector } from '@gdi/web-ui';

export type OverviewBarProps = {
    accountName: string;
    onAccountChange: () => void;
};

export function OverviewBar(props: OverviewBarProps) {
    const { accountName } = props;

    return (
        <Container
            className='OverviewBar-container'
            data-testid='OverviewBar-container'
        >
            <H1>Overview</H1>
            <AccountSelector onClick={props.onAccountChange}>
                {accountName}
            </AccountSelector>
            <Clock />
        </Container>
    );
}

export default OverviewBar;
