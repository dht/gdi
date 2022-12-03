import React from 'react';
import { Wrapper } from './SocialIcon.style';
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
        <Wrapper
            className='SocialIcon-wrapper'
            data-testid='SocialIcon-wrapper'
        >
            <SocialIconBase
                url={url}
                target='_blank'
                fgColor='white'
                onClick={onClick}
            />
        </Wrapper>
    );
}

export default SocialIcon;
