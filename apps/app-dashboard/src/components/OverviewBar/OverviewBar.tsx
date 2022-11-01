import React, { useContext } from 'react';
import { Container, H1 } from './OverviewBar.style';
import { Clock } from '../Clock/Clock';
import { AccountSelector } from '@gdi/web-ui';
import { useLanguage } from '@gdi/language';

export type OverviewBarProps = {
    accountName: string;
    onAccountChange: () => void;
};

export function OverviewBar(props: OverviewBarProps) {
    const { accountName } = props;
    const { t } = useLanguage();

    return (
        <Container
            className='OverviewBar-container'
            data-testid='OverviewBar-container'
        >
            <H1>{t('Overview')}</H1>
            <AccountSelector onClick={props.onAccountChange}>
                {accountName}
            </AccountSelector>
            <Clock />
        </Container>
    );
}

export default OverviewBar;
