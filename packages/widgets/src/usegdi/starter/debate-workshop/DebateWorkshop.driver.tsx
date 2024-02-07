import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DebateWorkshop, DebateWorkshopProps } from './DebateWorkshop';
import { BaseComponentDriver } from 'testing-base';

export class DebateWorkshopDriver extends BaseComponentDriver {
    private props: Partial<DebateWorkshopProps> = {};

    constructor() {
        super('DebateWorkshop');
    }

    when: any = {
        rendered: () => {
            render(<DebateWorkshop {...(this.props as DebateWorkshopProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DebateWorkshop {...(this.props as DebateWorkshopProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DebateWorkshopProps>) => {
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
