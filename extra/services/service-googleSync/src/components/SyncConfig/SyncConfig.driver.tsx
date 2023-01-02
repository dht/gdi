import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SyncConfig, SyncConfigProps } from './SyncConfig';
import { BaseComponentDriver } from 'testing-base';

export class SyncConfigDriver extends BaseComponentDriver {
    private props: Partial<SyncConfigProps> = {};

    constructor() {
        super('SyncConfig');
    }

    when: any = {
        rendered: () => {
            render(<SyncConfig {...(this.props as SyncConfigProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SyncConfig {...(this.props as SyncConfigProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SyncConfigProps>) => {
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
