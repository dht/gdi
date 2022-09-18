import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../components/Logo/Logo';
import TopMenu from '../../components/TopMenu/TopMenu';
import GithubLink from '../../components/GithubLink/GithubLink';
import { Container, Actions, Wrapper } from './UserBar.style';
import classnames from 'classnames';
import { throttle } from 'lodash';
import UserBarMobile from './mobile/UserBarMobile';
import { SiteContext } from '@gdi/engine';

export const id = 'com.usegdi.templates.basic.userBar-simple';

export type UserBarProps = {
    sequence?: number;
    strings: UserBarStrings;
    colors: UserBarColors;
    extra: UserBarExtra;
    isEditMode?: boolean;
    isScreenshotMode?: boolean;
};

export type UserBarStrings = {};

export type UserBarColors = {
    background?: string;
};

export type UserBarExtra = {
    logoImageUrl: string;
    githubLink: string;
    items: any[];
};

export function UserBar(props: UserBarProps) {
    const { colors, extra, isScreenshotMode } = props;
    const { githubLink, items = [] } = extra;
    let { menuItems } = useContext(SiteContext);

    // for screenshots
    if (!menuItems || menuItems.length === 0) {
        menuItems = items;
    }

    const scrollTop = useScroll();

    const className = classnames('UserBar-container', {
        inverted: scrollTop > 200,
    });

    if (window.innerWidth < 800) {
        return <UserBarMobile {...props} />;
    }

    let position = props.isEditMode ? 'absolute' : 'fixed';

    if (isScreenshotMode) {
        position = 'static';
    }

    return (
        <>
            <Container
                className={className}
                data-testid='UserBar-container'
                colors={colors}
                position={position}
            >
                <Wrapper>
                    <Logo />
                    <TopMenu items={menuItems} />
                    <Actions>
                        {githubLink && <GithubLink href={githubLink} />}
                    </Actions>
                </Wrapper>
            </Container>
        </>
    );
}

function useScroll() {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        function onScroll() {
            setScrollTop(window.scrollY);
        }

        const onScrollThrottled = throttle(onScroll, 10);

        document.addEventListener('scroll', onScrollThrottled);

        return () => {
            document.removeEventListener('scroll', onScrollThrottled);
        };
    }, []);

    return scrollTop;
}

export default UserBar;
