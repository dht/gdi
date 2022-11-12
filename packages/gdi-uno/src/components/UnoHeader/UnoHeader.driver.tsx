import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UnoHeader, UnoHeaderProps } from './UnoHeader';
import { BaseComponentDriver } from 'testing-base';

export class UnoHeaderDriver extends BaseComponentDriver {
    private props: Partial<UnoHeaderProps> = {
    };

    constructor() {
        super('UnoHeader');
    }

    when: any = {
        rendered: () => {
            render(<UnoHeader {...(this.props as UnoHeaderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<UnoHeader {...(this.props as UnoHeaderProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<UnoHeaderProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
