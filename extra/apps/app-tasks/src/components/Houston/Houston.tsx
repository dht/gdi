import React from 'react';
import { useMeasure } from 'react-use';
import { Container, Panel } from './Houston.style';

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
        <Container
            className='Houston-container'
            data-testid='Houston-container'
        >
            {renderChildren()}
        </Container>
    );
}

export default Houston;
