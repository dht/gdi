import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TodoFocus, TodoFocusProps } from './TodoFocus';
import { BaseComponentDriver } from 'testing-base';

export class TodoFocusDriver extends BaseComponentDriver {
    private props: Partial<TodoFocusProps> = {};

    constructor() {
        super('TodoFocus');
    }

    when: any = {
        rendered: () => {
            render(<TodoFocus {...(this.props as TodoFocusProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TodoFocus {...(this.props as TodoFocusProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TodoFocusProps>) => {
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
