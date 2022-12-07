import React, { useRef } from 'react';
import { Wrapper, Option, Options } from './Estimate.style';
import { Callout } from '@gdi/web-ui';
import './Estimate.scss';
import { Estimation } from './Estimate.data';

export type EstimateProps = {
    estimations: Estimation[];
    onClick: (option: Estimation) => void;
};

export function Estimate(props: EstimateProps) {
    const { estimations } = props;
    const ref = useRef<any>(null);

    function onClick(option: Estimation) {
        props.onClick(option);

        if (typeof ref.current.hideCallout === 'function') {
            ref.current.hideCallout();
        }
    }

    function renderOption(option: Estimation) {
        return (
            <Option
                key={option.id}
                className='option'
                onClick={() => onClick(option)}
            >
                {option.id}
            </Option>
        );
    }

    function renderOptions() {
        return estimations.map((option: Estimation) => renderOption(option));
    }

    return (
        <Wrapper className='Estimate-wrapper' data-testid='Estimate-wrapper'>
            <Callout ref={ref}>
                <Options>{renderOptions()}</Options>
            </Callout>
        </Wrapper>
    );
}

export default Estimate;
