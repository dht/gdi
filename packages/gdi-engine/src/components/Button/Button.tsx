import React from 'react';
import { Container } from './Button.style';

export type ButtonProps = {
    title?: string;
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button(props: ButtonProps) {
    const { title } = props;

    return (
        <Container
            className='Button-container'
            data-testid='Button-container'
            onClick={props.onClick}
        >
            {title}
        </Container>
    );
}

export default Button;
