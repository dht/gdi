import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MultiActions, MultiActionsProps } from './MultiActions';
import { BaseComponentDriver } from 'testing-base';

export class MultiActionsDriver extends BaseComponentDriver {
    private props: Partial<MultiActionsProps> = {};

    constructor() {
        super('MultiActions');
    }

    when: any = {
        rendered: () => {
            render(<MultiActions {...(this.props as MultiActionsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MultiActions {...(this.props as MultiActionsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MultiActionsProps>) => {
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
