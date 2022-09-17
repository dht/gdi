import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FormModal, FormModalProps } from './FormModal';
import { BaseComponentDriver } from 'testing-base';

export class FormModalDriver extends BaseComponentDriver {
    private props: Partial<FormModalProps> = {
    };

    constructor() {
        super('FormModal');
    }

    when: any = {
        rendered: () => {
            render(<FormModal {...(this.props as FormModalProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<FormModal {...(this.props as FormModalProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FormModalProps>) => {
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
