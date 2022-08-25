import React, { useRef } from 'react';
import {
    Container,
    Top,
    Menu,
    TopArc,
    Overlay,
    UserImage,
    Content,
    Name,
    Company,
    MenuItem,
    Title,
} from './UserMenu.style';
import { Avatar } from '../Avatar/Avatar';
import { Icon } from '@fluentui/react';
import { useClickAway, useToggle } from 'react-use';

type MenuItem = {
    id: string;
    title: string;
    icon: string;
};

type User = {
    displayName?: string | null;
    company?: string | null;
    photoURL?: string | null;
};

export type UserMenuProps = {
    user: User;
    items: MenuItem[];
    onClick: (id: string) => void;
};

export function UserMenu(props: UserMenuProps) {
    const { user, items } = props;
    const { displayName = '', company, photoURL = '' } = user;

    const ref = useRef<HTMLDivElement>(null);

    const [showMenu, toggleMenu] = useToggle(false);

    function onClick(id: string) {
        toggleMenu(false);
        props.onClick(id);
    }

    function renderItem(item: MenuItem) {
        const { id, title, icon } = item;

        return (
            <MenuItem key={id} className='item' onClick={() => onClick(id)}>
                <Icon className='icon' iconName={icon} />
                <Title>{title}</Title>
            </MenuItem>
        );
    }

    function renderItems() {
        return items.map((item: MenuItem) => renderItem(item));
    }

    useClickAway(ref, () => {
        toggleMenu(false);
    });

    const style = {
        height: 110 + items.length * 60 + 30,
    };

    return (
        <Container
            className='UserMenu-container'
            data-testid='UserMenu-container'
            ref={ref}
        >
            <Avatar
                size={40}
                name={displayName || ''}
                imageUrl={photoURL || ''}
                onClick={() => toggleMenu()}
            />

            <Overlay style={style} show={showMenu}>
                <TopArc src='/Menu.svg' />
                <Content>
                    <Top>
                        <UserImage>
                            <Avatar
                                size={80}
                                name={displayName || ''}
                                imageUrl={photoURL || ''}
                            />
                        </UserImage>
                        <Name>{displayName}</Name>
                        <Company>{company}</Company>
                    </Top>
                    <Menu>{renderItems()}</Menu>
                </Content>
            </Overlay>
        </Container>
    );
}

export default UserMenu;
