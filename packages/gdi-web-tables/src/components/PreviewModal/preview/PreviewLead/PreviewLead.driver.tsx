import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewLead, PreviewLeadProps } from './PreviewLead';
import { BaseComponentDriver } from 'testing-base';

export class PreviewLeadDriver extends BaseComponentDriver {
    private props: Partial<PreviewLeadProps> = {};

    constructor() {
        super('PreviewLead');
    }

    when: any = {
        rendered: () => {
            render(<PreviewLead {...(this.props as PreviewLeadProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PreviewLead {...(this.props as PreviewLeadProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PreviewLeadProps>) => {
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
