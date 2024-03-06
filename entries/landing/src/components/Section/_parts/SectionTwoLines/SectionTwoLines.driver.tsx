import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SectionTwoLines, SectionTwoLinesProps } from './SectionTwoLines';
import { BaseComponentDriver } from 'testing-base';

export class SectionTwoLinesDriver extends BaseComponentDriver {
    private props: Partial<SectionTwoLinesProps> = {};

    constructor() {
        super('SectionTwoLines');
    }

    when: any = {
        rendered: () => {
            render(<SectionTwoLines {...(this.props as SectionTwoLinesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SectionTwoLines {...(this.props as SectionTwoLinesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SectionTwoLinesProps>) => {
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
