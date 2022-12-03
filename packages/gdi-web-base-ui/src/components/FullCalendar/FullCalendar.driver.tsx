import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FullCalendar, FullCalendarProps } from './FullCalendar';
import { BaseComponentDriver } from 'testing-base';

export class FullCalendarDriver extends BaseComponentDriver {
    private props: Partial<FullCalendarProps> = {};

    constructor() {
        super('FullCalendar');
    }

    when: any = {
        rendered: () => {
            render(<FullCalendar {...(this.props as FullCalendarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <FullCalendar {...(this.props as FullCalendarProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<FullCalendarProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
