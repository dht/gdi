import React, { useContext } from 'react';
import { Wrapper, H1 } from './OverviewBar.style';
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
        <Wrapper
            className='OverviewBar-wrapper'
            data-testid='OverviewBar-wrapper'
        >
            <H1>{t('Overview')}</H1>

            <AccountSelector onClick={props.onAccountChange}>
                {accountName}
            </AccountSelector>
            <Clock />
        </Wrapper>
    );
}

export default OverviewBar;
