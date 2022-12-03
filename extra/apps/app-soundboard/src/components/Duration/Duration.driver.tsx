import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Duration, DurationProps } from './Duration';
import { BaseComponentDriver } from 'testing-base';

export class DurationDriver extends BaseComponentDriver {
    private props: Partial<DurationProps> = {};

    constructor() {
        super('Duration');
    }

    when: any = {
        rendered: () => {
            render(<Duration {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<DurationProps>) => {
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
