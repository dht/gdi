import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SectionCta, SectionCtaProps } from './SectionCta';
import { BaseComponentDriver } from 'testing-base';

export class SectionCtaDriver extends BaseComponentDriver {
    private props: Partial<SectionCtaProps> = {};

    constructor() {
        super('SectionCta');
    }

    when: any = {
        rendered: () => {
            render(<SectionCta {...(this.props as SectionCtaProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SectionCta {...(this.props as SectionCtaProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SectionCtaProps>) => {
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
