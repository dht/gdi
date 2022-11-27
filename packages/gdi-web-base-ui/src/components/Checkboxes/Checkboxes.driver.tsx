import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Checkboxes, CheckboxesProps } from './Checkboxes';
import { BaseComponentDriver } from 'testing-base';

export class CheckboxesDriver extends BaseComponentDriver {
    private props: Partial<CheckboxesProps> = {
    };

    constructor() {
        super('Checkboxes');
    }

    when: any = {
        rendered: () => {
            render(<Checkboxes {...(this.props as CheckboxesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Checkboxes {...(this.props as CheckboxesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CheckboxesProps>) => {
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
