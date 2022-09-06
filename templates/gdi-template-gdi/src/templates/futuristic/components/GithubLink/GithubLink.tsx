import React from 'react';
import { Container, Link } from './GithubLink.style';
import { GithubIcon } from './GithubIcon';

export type GithubLinkProps = {
    href: string;
};

export function GithubLink(props: GithubLinkProps) {
    const { href } = props;

    return (
        <Container
            className='GithubLink-container'
            data-testid='GithubLink-container'
        >
            <Link href={href}>
                <GithubIcon />
            </Link>
        </Container>
    );
}

export default GithubLink;
