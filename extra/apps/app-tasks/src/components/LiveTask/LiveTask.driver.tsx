import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LiveTask, LiveTaskProps } from './LiveTask';
import { BaseComponentDriver } from 'testing-base';

export class LiveTaskDriver extends BaseComponentDriver {
    private props: Partial<LiveTaskProps> = {};

    constructor() {
        super('LiveTask');
    }

    when: any = {
        rendered: () => {
            render(<LiveTask {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<LiveTaskProps>) => {
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
