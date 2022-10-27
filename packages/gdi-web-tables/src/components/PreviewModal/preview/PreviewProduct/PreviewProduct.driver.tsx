import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewProduct, PreviewProductProps } from './PreviewProduct';
import { BaseComponentDriver } from 'testing-base';

export class PreviewProductDriver extends BaseComponentDriver {
    private props: Partial<PreviewProductProps> = {
    };

    constructor() {
        super('PreviewProduct');
    }

    when: any = {
        rendered: () => {
            render(<PreviewProduct {...(this.props as PreviewProductProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PreviewProduct {...(this.props as PreviewProductProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PreviewProductProps>) => {
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
