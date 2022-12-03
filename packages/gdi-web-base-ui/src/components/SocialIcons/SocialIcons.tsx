import React from 'react';
import { SocialIcon } from '../SocialIcon/SocialIcon';
import { Wrapper, Icon } from './SocialIcons.style';
import classnames from 'classnames';

export type SocialIconsProps = {
    urls: string[];
    grayscale: boolean;
};

export function SocialIcons(props: SocialIconsProps) {
    const { urls, grayscale } = props;

    function renderUrl(url: string) {
        return (
            <Icon key={url} className='icon'>
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
