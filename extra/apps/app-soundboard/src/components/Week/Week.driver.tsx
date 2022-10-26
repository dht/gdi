import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Week, WeekProps } from './Week';
import { BaseComponentDriver } from 'testing-base';

export class WeekDriver extends BaseComponentDriver {
    private props: Partial<WeekProps> = {};

    constructor() {
        super('Week');
    }

    when: any = {
        rendered: () => {
            render(<Week {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<WeekProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
    };
}
