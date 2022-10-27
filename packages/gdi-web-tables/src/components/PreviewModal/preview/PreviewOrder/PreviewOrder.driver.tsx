import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewOrder, PreviewOrderProps } from './PreviewOrder';
import { BaseComponentDriver } from 'testing-base';

export class PreviewOrderDriver extends BaseComponentDriver {
    private props: Partial<PreviewOrderProps> = {
    };

    constructor() {
        super('PreviewOrder');
    }

    when: any = {
        rendered: () => {
            render(<PreviewOrder {...(this.props as PreviewOrderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PreviewOrder {...(this.props as PreviewOrderProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PreviewOrderProps>) => {
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
