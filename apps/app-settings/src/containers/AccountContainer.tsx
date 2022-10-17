import React from 'react';
import Account from '../components/Account/Account';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../selectors';

export const AccountContainer = () => {
    console.log('selectors ->', selectors);

    const me = useSelector(selectors.raw.$rawMe);
    const users = useSelector(selectors.base.$users);

    return <Account me={me} users={users} />;
};
