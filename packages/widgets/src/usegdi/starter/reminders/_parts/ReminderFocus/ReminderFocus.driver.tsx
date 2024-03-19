import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ReminderFocus, ReminderFocusProps } from './ReminderFocus';
import { BaseComponentDriver } from 'testing-base';

export class ReminderFocusDriver extends BaseComponentDriver {
    private props: Partial<ReminderFocusProps> = {};

    constructor() {
        super('ReminderFocus');
    }

    when: any = {
        rendered: () => {
            render(<ReminderFocus {...(this.props as ReminderFocusProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ReminderFocus {...(this.props as ReminderFocusProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ReminderFocusProps>) => {
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
