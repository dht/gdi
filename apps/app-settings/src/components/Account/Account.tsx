import React from 'react';
import { Avatar, TabbedPages } from '@gdi/web-ui';
import { tabs } from '../../data/data.tabs';
import { useLanguage } from '@gdi/language';
import {
    Column,
    Wrapper,
    UserField,
    UserRow,
    Users,
    H2,
    Content,
} from './Account.style';

export type AccountProps = {
    me: IUser;
    users: IUsers;
    children: React.ReactNode;
};

export function Account(props: AccountProps) {
    const { me, users } = props;
    const { displayName = '', email, photoURL } = me;
    const { t } = useLanguage();

    function renderUser(user: IUser) {
        const { displayName = '', email, photoURL, role } = user;

        return (
            <UserRow key={user.id} className='user'>
                <UserField>
                    <Avatar imageUrl={photoURL} name={displayName} />
                </UserField>
                <UserField color='yellowgreen'>{displayName}</UserField>
                <UserField>{email}</UserField>
                <UserField color='gold'>{role}</UserField>
            </UserRow>
        );
    }

    function renderUsers() {
        return Object.values(users).map((user: IUser) => renderUser(user));
    }

    return (
        <Wrapper className='Account-wrapper' data-testid='Account-wrapper'>
            <TabbedPages
                avatarUrl={photoURL}
                avatarName={displayName}
                title={displayName}
                subtitle={email}
                tabs={tabs}
                selectedTabId='account'
            >
                <Content>
                    <Column></Column>
                    <Column>
                        <H2>{t('Basic Info')}</H2>
                        {props.children}
                        <H2>{t('Users')}</H2>
                        <Users>{renderUsers()}</Users>
                    </Column>
                </Content>
            </TabbedPages>
        </Wrapper>
    );
}

export default Account;
