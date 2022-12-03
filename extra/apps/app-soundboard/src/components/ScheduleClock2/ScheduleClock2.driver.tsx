import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ScheduleClock2, ScheduleClock2Props } from './ScheduleClock2';
import { BaseComponentDriver } from 'testing-base';

export class ScheduleClock2Driver extends BaseComponentDriver {
    private props: Partial<ScheduleClock2Props> = {};

    constructor() {
        super('ScheduleClock2');
    }

    when: any = {
        rendered: () => {
            render(<ScheduleClock2 {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ScheduleClock2Props>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
