import React from 'react';
import { Wrapper } from './Bk.style';

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
        <Wrapper className='Bk-wrapper' data-testid='Bk-wrapper' style={style}>
            {props.children}
        </Wrapper>
    );
}

export default Bk;
