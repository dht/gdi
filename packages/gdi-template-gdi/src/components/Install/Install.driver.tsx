import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Install, InstallProps } from './Install';
import { BaseComponentDriver } from 'testing-base';

export class InstallDriver extends BaseComponentDriver {
    private props: Partial<InstallProps> = {};

    constructor() {
        super('Install');
    }

    when: any = {
        rendered: () => {
            render(<Install {...(this.props as InstallProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Install {...(this.props as InstallProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<InstallProps>) => {
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
