import React from 'react';
import { SocialIcon } from '../SocialIcon/SocialIcon';
import { Wrapper, Icon } from './SocialIcons.style';
import classnames from 'classnames';

export type SocialIconsProps = {
    urls: string[];
    grayscale: boolean;
    onClick?: (url: string) => void;
};

export function SocialIcons(props: SocialIconsProps) {
    const { urls, grayscale } = props;

    function onClick(url: string) {
        if (props.onClick) {
            props.onClick(url);
        }
    }

    function renderUrl(url: string) {
        return (
            <Icon key={url} className='icon' onClick={() => onClick(url)}>
                <SocialIcon url={url} />
            </Icon>
        );
    }

    function renderUrls() {
        return urls.map((url: string) => renderUrl(url));
    }

    const className = classnames('SocialIcons-wrapper', { grayscale });

    return (
        <Wrapper className={className} data-testid='SocialIcons-wrapper'>
            {renderUrls()}
        </Wrapper>
    );
}

export default SocialIcons;
