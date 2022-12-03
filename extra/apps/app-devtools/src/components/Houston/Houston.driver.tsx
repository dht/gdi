import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Houston, HoustonProps } from './Houston';
import { BaseComponentDriver } from 'testing-base';

export class HoustonDriver extends BaseComponentDriver {
    private props: Partial<HoustonProps> = {};

    constructor() {
        super('Houston');
    }

    when: any = {
        rendered: () => {
            render(<Houston {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<HoustonProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
