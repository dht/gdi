import React from 'react';
import { Container } from './SocialIcon.style';
import { SocialIcon as SocialIconBase } from 'react-social-icons';

export type SocialIconProps = {
    url: string;
};

export function SocialIcon(props: SocialIconProps) {
    const { url } = props;

    return (
        <Container
            className='SocialIcon-container'
            data-testid='SocialIcon-container'
        >
            <SocialIconBase url={url} target='_blank' fgColor='white' />
        </Container>
    );
}

export default SocialIcon;
