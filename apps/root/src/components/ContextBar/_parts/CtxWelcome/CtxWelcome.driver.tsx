import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CtxWelcome, CtxWelcomeProps } from './CtxWelcome';
import { BaseComponentDriver } from 'testing-base';

export class CtxWelcomeDriver extends BaseComponentDriver {
    private props: Partial<CtxWelcomeProps> = {};

    constructor() {
        super('CtxWelcome');
    }

    when: any = {
        rendered: () => {
            render(<CtxWelcome {...(this.props as CtxWelcomeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CtxWelcome {...(this.props as CtxWelcomeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CtxWelcomeProps>) => {
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
