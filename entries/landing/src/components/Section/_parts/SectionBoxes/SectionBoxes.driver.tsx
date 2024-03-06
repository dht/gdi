import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SectionBoxes, SectionBoxesProps } from './SectionBoxes';
import { BaseComponentDriver } from 'testing-base';

export class SectionBoxesDriver extends BaseComponentDriver {
    private props: Partial<SectionBoxesProps> = {};

    constructor() {
        super('SectionBoxes');
    }

    when: any = {
        rendered: () => {
            render(<SectionBoxes {...(this.props as SectionBoxesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SectionBoxes {...(this.props as SectionBoxesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SectionBoxesProps>) => {
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
