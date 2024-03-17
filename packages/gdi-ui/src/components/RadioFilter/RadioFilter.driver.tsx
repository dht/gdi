import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RadioFilter, RadioFilterProps } from './RadioFilter';
import { BaseComponentDriver } from 'testing-base';

export class RadioFilterDriver extends BaseComponentDriver {
    private props: Partial<RadioFilterProps> = {};

    constructor() {
        super('RadioFilter');
    }

    when: any = {
        rendered: () => {
            render(<RadioFilter {...(this.props as RadioFilterProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<RadioFilter {...(this.props as RadioFilterProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<RadioFilterProps>) => {
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
