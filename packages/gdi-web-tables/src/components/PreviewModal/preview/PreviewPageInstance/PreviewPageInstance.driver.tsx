import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewPageInstance, PreviewPageInstanceProps } from './PreviewPageInstance';
import { BaseComponentDriver } from 'testing-base';

export class PreviewPageInstanceDriver extends BaseComponentDriver {
    private props: Partial<PreviewPageInstanceProps> = {
    };

    constructor() {
        super('PreviewPageInstance');
    }

    when: any = {
        rendered: () => {
            render(<PreviewPageInstance {...(this.props as PreviewPageInstanceProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PreviewPageInstance {...(this.props as PreviewPageInstanceProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PreviewPageInstanceProps>) => {
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
