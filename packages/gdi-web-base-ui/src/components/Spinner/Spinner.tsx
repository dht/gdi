import React, { useMemo, useState } from 'react';
import { Wrapper } from './Spinner.style';
import classnames from 'classnames';
import { useDelay } from '../../hooks/useDelay';

// source: https://github.com/loadingio/css-spinner/
type Flavour = 'dualRing' | 'ellipsis' | 'facebook' | 'grid' | 'ripple';

export type SpinnerProps = {
    flavour?: Flavour;
    size?: 'small' | 'medium' | 'large';
    color?: string;
    delay?: number;
};

const divCount: Record<Flavour, number> = {
    dualRing: 0,
    ellipsis: 4,
    facebook: 3,
    grid: 9,
    ripple: 2,
};

export function Spinner(props: SpinnerProps) {
    const { flavour = 'ripple', color, size, delay = 0 } = props;

    const show = useDelay(delay);

    if (!show) {
        return null;
    }

    const count = divCount[flavour];

    function renderDiv(index: number) {
        return <div key={index} />;
    }

    function renderDivs() {
        return [...new Array(count)].map((_i, index) => renderDiv(index));
    }

    const className = classnames('Spinner-wrapper', flavour);

    const style = {
        color,
        zoom: size === 'small' ? 0.5 : size === 'large' ? 1 : 0.75,
    };

    return (
        <Wrapper
            className={className}
            data-testid='Spinner-wrapper'
            style={style}
        >
            {renderDivs()}
        </Wrapper>
    );
}

export default Spinner;
