import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UnoLink, UnoLinkProps } from './UnoLink';
import { BaseComponentDriver } from 'testing-base';

export class UnoLinkDriver extends BaseComponentDriver {
    private props: Partial<UnoLinkProps> = {};

    constructor() {
        super('UnoLink');
    }

    when: any = {
        rendered: () => {
            render(<UnoLink {...(this.props as UnoLinkProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<UnoLink {...(this.props as UnoLinkProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<UnoLinkProps>) => {
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
