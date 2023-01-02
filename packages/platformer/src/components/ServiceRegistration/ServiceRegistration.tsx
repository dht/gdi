import React from 'react';
import { Wrapper } from './ServiceRegistration.style';

export type ServiceRegistrationProps = {};

export function ServiceRegistration(_props: ServiceRegistrationProps) {
    return (
        <Wrapper className="ServiceRegistration-wrapper" data-testid="ServiceRegistration-wrapper">
            ServiceRegistration
        </Wrapper>
    );
}

export default ServiceRegistration;
