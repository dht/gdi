import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
    ReduxConnectedDevtools,
    ReduxConnectedDevtoolsProps,
} from './ReduxConnectedDevtools';
import { BaseComponentDriver } from 'testing-base';

export class ReduxConnectedDevtoolsDriver extends BaseComponentDriver {
    private props: Partial<ReduxConnectedDevtoolsProps> = {};

    constructor() {
        super('ReduxConnectedDevtools');
    }

    when: any = {
        rendered: () => {
            render(<ReduxConnectedDevtools {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ReduxConnectedDevtoolsProps>) => {
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
