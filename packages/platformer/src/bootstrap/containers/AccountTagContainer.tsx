import React, { useContext, useMemo } from 'react';
import { AccountTag } from '@gdi/web-ui';
import { PlatformContext } from '../../core/platform-context';
import { useDispatch } from 'react-redux';

type SwitcherContainerProps = {};

export function AccountTagContainer(_props: SwitcherContainerProps) {
    const dispatch = useDispatch();
    const { accountName, availableAccounts } = useContext(PlatformContext);

    const callbacks = useMemo(
        () => ({
            changeAccount: () => {
                dispatch({
                    type: 'CHANGE_ACCOUNT',
                    accountName,
                    availableAccounts,
                });
            },
        }),
        []
    );

    return (
        <AccountTag onClick={callbacks.changeAccount}>{accountName}</AccountTag>
    );
}
