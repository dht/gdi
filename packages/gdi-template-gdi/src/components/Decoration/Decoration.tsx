import React from 'react';
import { Container, Line } from './Decoration.style';
import classnames from 'classnames';

export type DecorationProps = {
    pink: boolean;
};

export function Decoration(props: DecorationProps) {
    const { pink } = props;

    const className = classnames('Decoration-container', {
        pink,
    });

    return (
        <Container className={className} data-testid='Decoration-container'>
            <Line className='line' />
        </Container>
    );
}

export default Decoration;
