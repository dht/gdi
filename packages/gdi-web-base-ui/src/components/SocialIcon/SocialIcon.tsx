import React from 'react';
import { Container } from './SocialIcon.style';
import { SocialIcon as SocialIconBase } from 'react-social-icons';

export type SocialIconProps = {
    url: string;
    onClick?: (url: string) => void;
};

export function SocialIcon(props: SocialIconProps) {
    const { url } = props;

    function onClick() {
        if (props.onClick) {
            props.onClick(url);
        }
    }

    return (
        <Container
            className='SocialIcon-container'
            data-testid='SocialIcon-container'
        >
            <SocialIconBase
                url={url}
                target='_blank'
                fgColor='white'
                onClick={onClick}
            />
        </Container>
    );
}

export default SocialIcon;
