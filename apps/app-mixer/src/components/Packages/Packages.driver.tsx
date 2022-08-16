import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Packages, PackagesProps } from './Packages';
import { BaseComponentDriver } from 'testing-base';

export class PackagesDriver extends BaseComponentDriver {
    private props: Partial<PackagesProps> = {
    };

    constructor() {
        super('Packages');
    }

    when: any = {
        rendered: () => {
            render(<Packages {...(this.props as PackagesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Packages {...(this.props as PackagesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PackagesProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
