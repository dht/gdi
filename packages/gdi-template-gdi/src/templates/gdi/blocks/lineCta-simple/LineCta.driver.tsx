import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LineCta, LineCtaProps } from './LineCta';
import { BaseComponentDriver } from 'testing-base';

export class LineCtaDriver extends BaseComponentDriver {
    private props: Partial<LineCtaProps> = {
    };

    constructor() {
        super('LineCta');
    }

    when: any = {
        rendered: () => {
            render(<LineCta {...(this.props as LineCtaProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<LineCta {...(this.props as LineCtaProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LineCtaProps>) => {
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
