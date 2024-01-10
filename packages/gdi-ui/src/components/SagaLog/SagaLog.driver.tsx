import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SagaLog, SagaLogProps } from './SagaLog';
import { BaseComponentDriver } from 'testing-base';

export class SagaLogDriver extends BaseComponentDriver {
    private props: Partial<SagaLogProps> = {};

    constructor() {
        super('SagaLog');
    }

    when: any = {
        rendered: () => {
            render(<SagaLog {...(this.props as SagaLogProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SagaLog {...(this.props as SagaLogProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SagaLogProps>) => {
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
