import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewPost, PreviewPostProps } from './PreviewPost';
import { BaseComponentDriver } from 'testing-base';

export class PreviewPostDriver extends BaseComponentDriver {
    private props: Partial<PreviewPostProps> = {};

    constructor() {
        super('PreviewPost');
    }

    when: any = {
        rendered: () => {
            render(<PreviewPost {...(this.props as PreviewPostProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PreviewPost {...(this.props as PreviewPostProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PreviewPostProps>) => {
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
