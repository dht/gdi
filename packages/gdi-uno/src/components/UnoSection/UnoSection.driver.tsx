import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UnoSection, UnoSectionProps } from './UnoSection';
import { BaseComponentDriver } from 'testing-base';

export class UnoSectionDriver extends BaseComponentDriver {
    private props: Partial<UnoSectionProps> = {
    };

    constructor() {
        super('UnoSection');
    }

    when: any = {
        rendered: () => {
            render(<UnoSection {...(this.props as UnoSectionProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<UnoSection {...(this.props as UnoSectionProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<UnoSectionProps>) => {
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
