import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SectionEvent, SectionEventProps } from './SectionEvent';
import { BaseComponentDriver } from 'testing-base';

export class SectionEventDriver extends BaseComponentDriver {
    private props: Partial<SectionEventProps> = {};

    constructor() {
        super('SectionEvent');
    }

    when: any = {
        rendered: () => {
            render(<SectionEvent {...(this.props as SectionEventProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SectionEvent {...(this.props as SectionEventProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SectionEventProps>) => {
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
