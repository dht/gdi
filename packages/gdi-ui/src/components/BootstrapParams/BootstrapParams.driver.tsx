import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BootstrapParams, BootstrapParamsProps } from './BootstrapParams';
import { BaseComponentDriver } from 'testing-base';

export class BootstrapParamsDriver extends BaseComponentDriver {
    private props: Partial<BootstrapParamsProps> = {};

    constructor() {
        super('BootstrapParams');
    }

    when: any = {
        rendered: () => {
            render(<BootstrapParams {...(this.props as BootstrapParamsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BootstrapParams {...(this.props as BootstrapParamsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BootstrapParamsProps>) => {
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
