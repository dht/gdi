import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Templates, TemplatesProps } from './Templates';
import { BaseComponentDriver } from 'testing-base';

export class TemplatesDriver extends BaseComponentDriver {
    private props: Partial<TemplatesProps> = {
    };

    constructor() {
        super('Templates');
    }

    when: any = {
        rendered: () => {
            render(<Templates {...(this.props as TemplatesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Templates {...(this.props as TemplatesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TemplatesProps>) => {
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
