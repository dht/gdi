import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewLayout, PreviewLayoutProps } from './PreviewLayout';
import { BaseComponentDriver } from 'testing-base';

export class PreviewLayoutDriver extends BaseComponentDriver {
    private props: Partial<PreviewLayoutProps> = {
    };

    constructor() {
        super('PreviewLayout');
    }

    when: any = {
        rendered: () => {
            render(<PreviewLayout {...(this.props as PreviewLayoutProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PreviewLayout {...(this.props as PreviewLayoutProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PreviewLayoutProps>) => {
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
