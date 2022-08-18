import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo/Logo';
import TopMenu from '../../components/TopMenu/TopMenu';
import GithubLink from '../../components/GithubLink/GithubLink';
import { Container, Actions, Wrapper } from './UserBar.style';
import classnames from 'classnames';
import { throttle } from 'lodash';
import UserBarMobile from './mobile/UserBarMobile';

export const id = 'com.usegdi.templates.gdi.userBar-simple';

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
    backgroundColor?: string;
};

export type UserBarExtra = {
    logoImageUrl: string;
    items: any[];
    githubLink: string;
};

export function UserBar(props: UserBarProps) {
    const { colors, extra, isEditMode } = props;
    const { items = [], githubLink } = extra;

    const scrollTop = useScroll();

    const className = classnames('UserBar-container', {
        inverted: scrollTop > 200,
    });

    if (window.innerWidth < 800) {
        return <UserBarMobile {...props} />;
    }

    let position = props.isEditMode ? 'absolute' : 'fixed';

    if (props.isScreenshotMode) {
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
                    <TopMenu items={items} />
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
