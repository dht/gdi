import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Save, SaveProps } from './Save';
import { BaseComponentDriver } from 'testing-base';

export class SaveDriver extends BaseComponentDriver {
    private props: Partial<SaveProps> = {};

    constructor() {
        super('Save');
    }

    when: any = {
        rendered: () => {
            render(<Save {...(this.props as SaveProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Save {...(this.props as SaveProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SaveProps>) => {
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
