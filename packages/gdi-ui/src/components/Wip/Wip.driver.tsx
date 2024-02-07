import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Wip, WipProps } from './Wip';
import { BaseComponentDriver } from 'testing-base';

export class WipDriver extends BaseComponentDriver {
    private props: Partial<WipProps> = {};

    constructor() {
        super('Wip');
    }

    when: any = {
        rendered: () => {
            render(<Wip {...(this.props as WipProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Wip {...(this.props as WipProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<WipProps>) => {
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
