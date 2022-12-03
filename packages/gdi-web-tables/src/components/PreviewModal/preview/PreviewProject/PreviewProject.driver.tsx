import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewProject, PreviewProjectProps } from './PreviewProject';
import { BaseComponentDriver } from 'testing-base';

export class PreviewProjectDriver extends BaseComponentDriver {
    private props: Partial<PreviewProjectProps> = {};

    constructor() {
        super('PreviewProject');
    }

    when: any = {
        rendered: () => {
            render(<PreviewProject {...(this.props as PreviewProjectProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PreviewProject {...(this.props as PreviewProjectProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PreviewProjectProps>) => {
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
