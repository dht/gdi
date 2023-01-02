import React from 'react';
import { Wrapper } from './Guidance.style';

export type GuidanceProps = {
    bmsFeatures: any;
    businessDomains: any;
};

export function Guidance(props: GuidanceProps) {
    const { bmsFeatures, businessDomains } = props;

    return (
        <Wrapper className='Guidance-wrapper' data-testid='Guidance-wrapper'>
            <pre>{JSON.stringify(bmsFeatures, null, 2)}</pre>
            <pre>{JSON.stringify(businessDomains, null, 2)}</pre>
        </Wrapper>
    );
}

export default Guidance;
