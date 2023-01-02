import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ServiceRegistration, ServiceRegistrationProps } from './ServiceRegistration';
import { BaseComponentDriver } from 'testing-base';

export class ServiceRegistrationDriver extends BaseComponentDriver {
    private props: Partial<ServiceRegistrationProps> = {};

    constructor() {
        super('ServiceRegistration');
    }

    when: any = {
        rendered: () => {
            render(<ServiceRegistration {...(this.props as ServiceRegistrationProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ServiceRegistration {...(this.props as ServiceRegistrationProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ServiceRegistrationProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
