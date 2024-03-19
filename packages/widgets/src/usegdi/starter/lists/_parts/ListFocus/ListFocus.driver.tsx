import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ListFocus, ListFocusProps } from './ListFocus';
import { BaseComponentDriver } from 'testing-base';

export class ListFocusDriver extends BaseComponentDriver {
    private props: Partial<ListFocusProps> = {};

    constructor() {
        super('ListFocus');
    }

    when: any = {
        rendered: () => {
            render(<ListFocus {...(this.props as ListFocusProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ListFocus {...(this.props as ListFocusProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ListFocusProps>) => {
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
