import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SectionReady, SectionReadyProps } from './SectionReady';
import { BaseComponentDriver } from 'testing-base';

export class SectionReadyDriver extends BaseComponentDriver {
    private props: Partial<SectionReadyProps> = {};

    constructor() {
        super('SectionReady');
    }

    when: any = {
        rendered: () => {
            render(<SectionReady {...(this.props as SectionReadyProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SectionReady {...(this.props as SectionReadyProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SectionReadyProps>) => {
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
