import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ServiceSleeve, ServiceSleeveProps } from './ServiceSleeve';
import { BaseComponentDriver } from 'testing-base';

export class ServiceSleeveDriver extends BaseComponentDriver {
    private props: Partial<ServiceSleeveProps> = {};

    constructor() {
        super('ServiceSleeve');
    }

    when: any = {
        rendered: () => {
            render(<ServiceSleeve {...(this.props as ServiceSleeveProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ServiceSleeve {...(this.props as ServiceSleeveProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ServiceSleeveProps>) => {
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
