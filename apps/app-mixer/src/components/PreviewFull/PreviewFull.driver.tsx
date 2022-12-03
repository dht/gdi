import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewFull, PreviewFullProps } from './PreviewFull';
import { BaseComponentDriver } from 'testing-base';

export class PreviewFullDriver extends BaseComponentDriver {
    private props: Partial<PreviewFullProps> = {};

    constructor() {
        super('PreviewFull');
    }

    when: any = {
        rendered: () => {
            render(<PreviewFull {...(this.props as PreviewFullProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PreviewFull {...(this.props as PreviewFullProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PreviewFullProps>) => {
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
