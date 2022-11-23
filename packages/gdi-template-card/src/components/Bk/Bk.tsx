import React from 'react';
import { Container } from './Bk.style';

export type BkProps = {
    color: string;
    children: JSX.Element | JSX.Element[];
};

export function Bk(props: BkProps) {
    const { color } = props;

    const style: React.CSSProperties = {
        backgroundColor: color,
    };

    return (
        <Container
            className='Bk-container'
            data-testid='Bk-container'
            style={style}
        >
            {props.children}
        </Container>
    );
}

export default Bk;
