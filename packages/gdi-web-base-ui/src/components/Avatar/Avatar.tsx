import React from 'react';
import { Wrapper } from './Avatar.style';

export type AvatarProps = {
    name: string;
    size?: number;
    imageUrl?: string;
    color?: string;
    onClick?: () => void;
};

export function Avatar(props: AvatarProps) {
    const { size = 32, color = '#334', name = '', imageUrl } = props;

    let style: React.CSSProperties = {},
        text = '';

    style.fontSize = size / 4;

    if (imageUrl) {
        style = {
            backgroundImage: `url(${imageUrl})`,
        };
    } else {
        text = name
            .split(' ')
            .map((i) => i.substring(0, 1).toUpperCase())
            .join('');
    }

    return (
        <Wrapper
            className='Avatar-wrapper'
            data-testid='Avatar-wrapper'
            size={size}
            color={color}
            style={style}
            onClick={props.onClick}
        >
            {text}
        </Wrapper>
    );
}

export default Avatar;
