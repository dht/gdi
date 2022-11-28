import React, { useRef } from 'react';
import { Estimation } from '../../containers/EstimateContainer.data';
import { Container, Option, Options } from './Estimate.style';
import { Callout } from '@gdi/web-ui';
import './Estimate.scss';

export type EstimateProps = {
    estimations: Estimation[];
    onClick: (option: Estimation) => void;
};

export function Estimate(props: EstimateProps) {
    const { estimations } = props;
    const ref = useRef(null);

    function onClick(option: Estimation) {
        props.onClick(option);
        ref.current.hideCallout();
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
        <Container
            className='Estimate-container'
            data-testid='Estimate-container'
        >
            <Callout buttonIcon='stopwatch' ref={ref}>
                <Options>{renderOptions()}</Options>
            </Callout>
        </Container>
    );
}

export default Estimate;
