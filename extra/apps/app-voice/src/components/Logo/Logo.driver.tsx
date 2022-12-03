import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Logo, LogoProps } from './LogoSchedule';
import { BaseComponentDriver } from 'testing-base';

export class LogoDriver extends BaseComponentDriver {
    private props: Partial<LogoProps> = {};

    constructor() {
        super('Logo');
    }

    when: any = {
        rendered: () => {
            render(<Logo {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<LogoProps>) => {
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
