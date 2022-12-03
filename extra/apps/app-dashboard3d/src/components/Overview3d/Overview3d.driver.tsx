import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Overview3d, Overview3dProps } from './Overview3d';
import { BaseComponentDriver } from 'testing-base';

export class Overview3dDriver extends BaseComponentDriver {
    private props: Partial<Overview3dProps> = {};

    constructor() {
        super('Overview3d');
    }

    when: any = {
        rendered: () => {
            render(<Overview3d {...(this.props as Overview3dProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Overview3d {...(this.props as Overview3dProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<Overview3dProps>) => {
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
