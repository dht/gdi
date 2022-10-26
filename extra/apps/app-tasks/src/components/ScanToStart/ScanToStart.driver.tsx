import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ScanToStart, ScanToStartProps } from './ScanToStart';
import { BaseComponentDriver } from 'testing-base';

export class ScanToStartDriver extends BaseComponentDriver {
    private props: Partial<ScanToStartProps> = {};

    constructor() {
        super('ScanToStart');
    }

    when: any = {
        rendered: () => {
            render(<ScanToStart {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ScanToStartProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
    };
}
