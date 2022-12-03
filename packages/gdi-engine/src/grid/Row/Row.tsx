import React from 'react';
import { Wrapper } from './Row.style';
import classnames from 'classnames';

export type RowProps = {
    children: JSX.Element | JSX.Element[];
    className?: string;
    center?: boolean;
};

export function Row(props: RowProps) {
    const { center } = props;

    const className = classnames('row', props.className, {
        center,
    });

    return (
        <Wrapper className={className} data-testid='Row-wrapper'>
            {props.children}
        </Wrapper>
    );
}

export default Row;
