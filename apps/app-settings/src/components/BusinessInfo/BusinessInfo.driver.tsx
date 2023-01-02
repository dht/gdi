import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BusinessInfo, BusinessInfoProps } from './BusinessInfo';
import { BaseComponentDriver } from 'testing-base';

export class BusinessInfoDriver extends BaseComponentDriver {
    private props: Partial<BusinessInfoProps> = {};

    constructor() {
        super('BusinessInfo');
    }

    when: any = {
        rendered: () => {
            render(<BusinessInfo {...(this.props as BusinessInfoProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BusinessInfo {...(this.props as BusinessInfoProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BusinessInfoProps>) => {
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
