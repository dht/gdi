import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Refresh, RefreshProps } from './Refresh';
import { BaseComponentDriver } from 'testing-base';

export class RefreshDriver extends BaseComponentDriver {
    private props: Partial<RefreshProps> = {};

    constructor() {
        super('Refresh');
    }

    when: any = {
        rendered: () => {
            render(<Refresh {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<RefreshProps>) => {
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
