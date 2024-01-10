import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextViewer, TextViewerProps } from './TextViewer';
import { BaseComponentDriver } from 'testing-base';

export class TextViewerDriver extends BaseComponentDriver {
    private props: Partial<TextViewerProps> = {};

    constructor() {
        super('TextViewer');
    }

    when: any = {
        rendered: () => {
            render(<TextViewer {...(this.props as TextViewerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TextViewer {...(this.props as TextViewerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TextViewerProps>) => {
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
