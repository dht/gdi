import React, { useContext, useEffect } from 'react';
import classnames from 'classnames';
import {
    Container,
    Hamburger,
    Actions,
    Flex,
    Link,
    Menu,
    MenuWrapper,
    Overlay,
} from './UserBarMobile.style';
import { useToggle } from 'react-use';
import { Logo } from '@gdi/web-ui';
import TopMenu from '../../../components/TopMenu/TopMenu';
import { SiteContext } from '@gdi/engine';

export type UserBarMobileProps = {
    sequence?: number;
    strings: UserBarStrings;
    colors: UserBarColors;
    extra: UserBarExtra;
};

export type UserBarStrings = {};

export type UserBarColors = {};

export type UserBarExtra = {
    logoImageUrl: string;
    githubLink: string;
};

export function UserBarMobile(props: UserBarMobileProps) {
    const { colors, extra } = props;
    const { githubLink } = extra;
    const [isMenuOn, toggleMenu] = useToggle(false);
    const { menuItems } = useContext(SiteContext);

    const className = classnames('UserBarMobile-container');

    function onLinkClick() {
        toggleMenu(false);
    }

    useEffect(() => {
        const el = document.body;

        if (isMenuOn) {
            el.classList.add('no-scroll');
        } else {
            el.classList.remove('no-scroll');
        }
    }, [isMenuOn]);

    function renderMenu() {
        const className = classnames({ on: isMenuOn });

        return (
            <MenuWrapper className={className}>
                <Link href='#top'>
                    <Logo />
                </Link>
                <Flex />
                <Menu>
                    <TopMenu items={menuItems} />
                </Menu>
                <Flex />
                <Actions></Actions>
            </MenuWrapper>
        );
    }

    function renderOverlay() {
        const className = classnames({ on: isMenuOn });

        return <Overlay className={className} onClick={() => toggleMenu()} />;
    }

    return (
        <Container className={className} data-testid='UserBarMobile-container'>
            <Hamburger className='material-icons' onClick={() => toggleMenu()}>
                menu
            </Hamburger>
            <Flex />
            <Link href='#top'>
                <Logo />
            </Link>
            {renderOverlay()}

            {renderMenu()}
        </Container>
    );
}

export default UserBarMobile;
