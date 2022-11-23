import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CtaLine, CtaLineProps } from './CtaLine';
import { BaseComponentDriver } from 'testing-base';

export class CtaLineDriver extends BaseComponentDriver {
    private props: Partial<CtaLineProps> = {
    };

    constructor() {
        super('CtaLine');
    }

    when: any = {
        rendered: () => {
            render(<CtaLine {...(this.props as CtaLineProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
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
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
