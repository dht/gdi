import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Apps, AppsProps } from './Apps';
import { BaseComponentDriver } from 'testing-base';

export class AppsDriver extends BaseComponentDriver {
    private props: Partial<AppsProps> = {};

    constructor() {
        super('Apps');
    }

    when: any = {
        rendered: () => {
            render(<Apps {...(this.props as AppsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Apps {...(this.props as AppsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<AppsProps>) => {
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
