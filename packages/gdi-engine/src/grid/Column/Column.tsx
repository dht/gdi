import React from 'react';
import { Wrapper } from './Column.style';
import classnames from 'classnames';

export type ColumnProps = {
    children: JSX.Element | JSX.Element[];
    className?: string;
    middle?: boolean;
};

export function Column(props: ColumnProps) {
    const { middle } = props;

    const className = classnames('column', props.className, {
        middle,
    });

    return (
        <Wrapper className={className} data-testid='Column-wrapper'>
            {props.children}
        </Wrapper>
    );
}

export default Column;
