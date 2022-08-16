import React from 'react';
import { Container } from './Avatar.style';

export type AvatarProps = {
    name: string;
    size?: number;
    imageUrl?: string;
    color?: string;
    onClick?: () => void;
};

export function Avatar(props: AvatarProps) {
    const { size = 32, color = '#334', name = '', imageUrl } = props;

    let style,
        text = '';

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
        <Container
            className='Avatar-container'
            data-testid='Avatar-container'
            size={size}
            color={color}
            style={style}
            onClick={props.onClick}
        >
            {text}
        </Container>
    );
}

export default Avatar;
