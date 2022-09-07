import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LayoutFlex, LayoutFlexProps } from './LayoutFlex';
import { BaseComponentDriver } from 'testing-base';

export class LayoutFlexDriver extends BaseComponentDriver {
    private props: Partial<LayoutFlexProps> = {
    };

    constructor() {
        super('LayoutFlex');
    }

    when: any = {
        rendered: () => {
            render(<LayoutFlex {...(this.props as LayoutFlexProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<LayoutFlex {...(this.props as LayoutFlexProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LayoutFlexProps>) => {
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
