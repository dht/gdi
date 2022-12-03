import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Preview, PreviewProps } from './Preview';
import { BaseComponentDriver } from 'testing-base';

export class PreviewDriver extends BaseComponentDriver {
    private props: Partial<PreviewProps> = {};

    constructor() {
        super('Preview');
    }

    when: any = {
        rendered: () => {
            render(<Preview {...(this.props as PreviewProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Preview {...(this.props as PreviewProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PreviewProps>) => {
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
