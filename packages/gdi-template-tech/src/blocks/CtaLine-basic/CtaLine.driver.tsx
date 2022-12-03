import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CtaLine, CtaLineProps } from './CtaLine';
import { BaseComponentDriver } from 'testing-base';

export class CtaLineDriver extends BaseComponentDriver {
    private props: Partial<CtaLineProps> = {};

    constructor() {
        super('CtaLine');
    }

    when: any = {
        rendered: () => {
            render(<CtaLine {...(this.props as CtaLineProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CtaLine {...(this.props as CtaLineProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CtaLineProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
