import React from 'react';
import Account from '../components/Account/Account';
import { BusinessInfoContainer } from './BusinessInfoContainer';
import { selectors } from '../selectors';
import { useSelector } from 'react-redux';

export const AccountContainer = () => {
    const me = useSelector(selectors.raw.$rawMe);
    const users = useSelector(selectors.base.$users);

    return (
        <Account me={me} users={users}>
            <BusinessInfoContainer />
        </Account>
    );
};

export default AccountContainer;
