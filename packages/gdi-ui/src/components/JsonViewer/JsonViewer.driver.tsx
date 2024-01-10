import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { JsonViewer, JsonViewerProps } from './JsonViewer';
import { BaseComponentDriver } from 'testing-base';

export class JsonViewerDriver extends BaseComponentDriver {
    private props: Partial<JsonViewerProps> = {};

    constructor() {
        super('JsonViewer');
    }

    when: any = {
        rendered: () => {
            render(<JsonViewer {...(this.props as JsonViewerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<JsonViewer {...(this.props as JsonViewerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<JsonViewerProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
