import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Installation, InstallationProps } from './Installation';
import { BaseComponentDriver } from 'testing-base';

export class InstallationDriver extends BaseComponentDriver {
    private props: Partial<InstallationProps> = {
    };

    constructor() {
        super('Installation');
    }

    when: any = {
        rendered: () => {
            render(<Installation {...(this.props as InstallationProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Installation {...(this.props as InstallationProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<InstallationProps>) => {
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
