import React from 'react';
import { useMeasure } from 'react-use';
import { Wrapper, Panel } from './Houston.style';

export type HoustonProps = {
    children: JSX.Element[];
};

export function Houston(props: HoustonProps) {
    const { children } = props;

    function renderChild(child: JSX.Element, index: number) {
        return (
            <Panel key={index} className='child'>
                {child}
            </Panel>
        );
    }

    function renderChildren() {
        return children.map((child: JSX.Element, index) =>
            renderChild(child, index)
        );
    }

    return (
        <Wrapper className='Houston-wrapper' data-testid='Houston-wrapper'>
            {renderChildren()}
        </Wrapper>
    );
}

export default Houston;
