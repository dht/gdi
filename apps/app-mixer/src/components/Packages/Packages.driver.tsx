import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Packages, PackagesProps } from './Packages';
import { BaseComponentDriver } from 'testing-base';

export class PackagesDriver extends BaseComponentDriver {
    private props: Partial<PackagesProps> = {};

    constructor() {
        super('Packages');
    }

    when: any = {
        rendered: () => {
            render(<Packages {...(this.props as PackagesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Packages {...(this.props as PackagesProps)} />
            );
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
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
