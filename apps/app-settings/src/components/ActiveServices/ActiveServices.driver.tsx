import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ActiveServices, ActiveServicesProps } from './ActiveServices';
import { BaseComponentDriver } from 'testing-base';

export class ActiveServicesDriver extends BaseComponentDriver {
    private props: Partial<ActiveServicesProps> = {};

    constructor() {
        super('ActiveServices');
    }

    when: any = {
        rendered: () => {
            render(<ActiveServices {...(this.props as ActiveServicesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ActiveServices {...(this.props as ActiveServicesProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ActiveServicesProps>) => {
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
