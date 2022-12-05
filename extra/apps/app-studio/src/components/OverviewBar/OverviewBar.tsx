import React, { useContext } from 'react';
import { Wrapper, H1, NotificationsContainer, Flex } from './OverviewBar.style';
import { Clock } from '../Clock/Clock';
import { AccountSelector, NotificationsButton } from '@gdi/web-ui';
import { useLanguage } from '@gdi/language';

export type OverviewBarProps = {
    accountName: string;
    notificationsBadge: string;
    callbacks: {
        onAccountChange: () => void;
        onToggleNotifications: () => void;
    };
};

export function OverviewBar(props: OverviewBarProps) {
    const { accountName, notificationsBadge, callbacks } = props;
    const { t } = useLanguage();

    return (
        <Wrapper
            className='OverviewBar-wrapper'
            data-testid='OverviewBar-wrapper'
        >
            <H1>{t('Overview')}</H1>
            <NotificationsContainer>
                <NotificationsButton
                    badge={notificationsBadge}
                    onClick={callbacks.onToggleNotifications}
                />
            </NotificationsContainer>
            <AccountSelector onClick={callbacks.onAccountChange}>
                {accountName}
            </AccountSelector>
            <Flex />
            <Clock />
        </Wrapper>
    );
}

export default OverviewBar;
