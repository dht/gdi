import React from 'react';
import { Wrapper } from './Row.style';
import classnames from 'classnames';

export type RowProps = {
    children: JSX.Element | JSX.Element[];
    className?: string;
};

export function Row(props: RowProps) {
    const className = classnames('row', props.className, {});

    return (
        <Wrapper className={className} data-testid='Row-wrapper'>
            {props.children}
        </Wrapper>
    );
}

export default Row;
