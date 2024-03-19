import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FinanceFocus, FinanceFocusProps } from './FinanceFocus';
import { BaseComponentDriver } from 'testing-base';

export class FinanceFocusDriver extends BaseComponentDriver {
    private props: Partial<FinanceFocusProps> = {};

    constructor() {
        super('FinanceFocus');
    }

    when: any = {
        rendered: () => {
            render(<FinanceFocus {...(this.props as FinanceFocusProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<FinanceFocus {...(this.props as FinanceFocusProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FinanceFocusProps>) => {
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
