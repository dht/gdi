import React from 'react';
import { Avatar, TrianglesBk } from '@gdi/web-ui';
import {
    Column,
    Wrapper,
    Content,
    Details,
    Email,
    Me,
    Name,
    SettingsWrapper,
    Top,
    UserField,
    UserRow,
    Users,
} from './Account.style';
import { SettingsTab } from '../SettingsTab/SettingsTab';
import { tabs } from '../SettingsTab/SettingsTab.data';

export type AccountProps = {
    me: IUser;
    users: IUser[];
    onChange: () => void;
};

export function Account(props: AccountProps) {
    const { me, users } = props;

    const { displayName, email, photoURL } = me;

    function renderUser(user: IUser) {
        const { displayName, email, photoURL, role } = user;

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
            <Top>
                <TrianglesBk>
                    <Details>
                        <Avatar
                            size={100}
                            imageUrl={photoURL}
                            name={displayName}
                        />
                        <Me>
                            <Name>{displayName}</Name>
                            <Email>{email}</Email>
                        </Me>
                        <SettingsWrapper>
                            <SettingsTab tabs={tabs} selectedTabId='account' />
                        </SettingsWrapper>
                    </Details>
                </TrianglesBk>
            </Top>
            <Content>
                <Column></Column>
                <Column>
                    <Users>{renderUsers()}</Users>
                </Column>
            </Content>
        </Wrapper>
    );
}

export default Account;
