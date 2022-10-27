import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewCart, PreviewCartProps } from './PreviewCart';
import { BaseComponentDriver } from 'testing-base';

export class PreviewCartDriver extends BaseComponentDriver {
    private props: Partial<PreviewCartProps> = {
    };

    constructor() {
        super('PreviewCart');
    }

    when: any = {
        rendered: () => {
            render(<PreviewCart {...(this.props as PreviewCartProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PreviewCart {...(this.props as PreviewCartProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PreviewCartProps>) => {
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
