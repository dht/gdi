import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Section, SectionProps } from './Section';
import { BaseComponentDriver } from 'testing-base';

export class SectionDriver extends BaseComponentDriver {
    private props: Partial<SectionProps> = {};

    constructor() {
        super('Section');
    }

    when: any = {
        rendered: () => {
            render(<Section {...(this.props as SectionProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Section {...(this.props as SectionProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SectionProps>) => {
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
